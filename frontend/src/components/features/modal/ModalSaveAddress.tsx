"use client"
import React, { useEffect, useState } from 'react'
import Modal from '@/components/features/modal/Modal'
import { addAddress, updateAddress, getProvinces, getDistrictsByStateId, getWardsByDistrictId, getAddressById } from '@/lib/api/address';
import { AddressT } from '@/types/common.types';
import CustomSelect, { OptionType } from '@/components/ui/CustomSelect';
import { useAuthContext } from '../provider/AuthProvider';

interface ModalSaveAddressProps {
  id: string;
  addressId?: number;
  // addressData?: AddressT;
  onClose: () => void;
  refresh: () => void;
  refreshCurrentAddress?: () => void;
}

function ModalSaveAddress({ id, addressId, onClose, refresh, refreshCurrentAddress }: ModalSaveAddressProps) {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [provinceId, setProvinceId] = useState<string>('');
  const [districtId, setDistrictId] = useState<string>('');
  const [wardId, setWardId] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [status, setStatus] = useState<number>(0);
  const { user } = useAuthContext();


  const [provinces, setProvinces] = useState<{ id: string; text: string }[]>([]);
  const [districts, setDistricts] = useState<{ id: string; text: string }[]>([]);
  const [wards, setWards] = useState<{ id: string; text: string }[]>([]);


  const handleFetchAddressByID = async (id: number) => {
    const data = await getAddressById(id);
    setName(data.name);
    setPhone(data.phone);
    setProvinceId(data.province_id);
    setDistrictId(data.district_id);
    setWardId(data.ward_id);
    setAddress(data.address);
    setStatus(data.status);
  };
  // const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);

  // Validation errors
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    provinceId?: string;
    districtId?: string;
    wardId?: string;
    address?: string;
  }>({});



  // Fetch provinces on mount
  useEffect(() => {
    const fetchProvinces = async () => {
      const data = await getProvinces();
      setProvinces(data);
    };
    fetchProvinces();
    if (addressId) {
      handleFetchAddressByID(addressId);
    }
  }, []);

  // Fetch districts when province changes (including initial load for edit)
  useEffect(() => {
    if (provinceId) {
      const fetchDistricts = async () => {
        const data = await getDistrictsByStateId(provinceId);
        setDistricts(data);


      };
      fetchDistricts();
    } else {
      setDistricts([]);
      setDistrictId('');
      setWards([]);
      setWardId('');
    }
  }, [provinceId]);

  // Fetch wards when district changes (including initial load for edit)
  useEffect(() => {
    if (districtId) {
      const fetchWards = async () => {
        const data = await getWardsByDistrictId(districtId);
        setWards(data);


      };
      fetchWards();
    } else {
      setWards([]);
      setWardId('');
    }
  }, [districtId]);

  const handleSubmit = async () => {
    // Validate form
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Vui lòng nhập họ và tên';
    if (!phone.trim()) newErrors.phone = 'Vui lòng nhập số điện thoại';
    else if (!/^[0-9]{10}$/.test(phone.replace(/\s/g, ''))) newErrors.phone = 'Số điện thoại không hợp lệ';
    if (!provinceId) newErrors.provinceId = 'Vui lòng chọn tỉnh/thành phố';
    if (!districtId) newErrors.districtId = 'Vui lòng chọn quận/huyện';
    if (!wardId) newErrors.wardId = 'Vui lòng chọn phường/xã';
    if (!address.trim()) newErrors.address = 'Vui lòng nhập địa chỉ';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Build fulladdress from selected options
    const provinceName = provinces.find(p => p.id === provinceId)?.text || '';
    const districtName = districts.find(d => d.id === districtId)?.text || '';
    const wardName = wards.find(w => w.id === wardId)?.text || '';
    const fulladdress = `${address}, ${wardName}, ${districtName}, ${provinceName}, Vietnam`;

    const body = {
      name,
      phone,
      address,
      country_id: '240',
      province_id: provinceId,
      district_id: districtId,
      ward_id: wardId,
      fulladdress,
      is_deleted: 0,
      status,
    };
    let resdata;
    if (addressId) {
      resdata = await updateAddress(addressId, body);
      if (resdata) {
        refreshCurrentAddress && refreshCurrentAddress();
      }
    } else {
      resdata = await addAddress(body);
      if (resdata) {
        refreshCurrentAddress && refreshCurrentAddress();
      }
    }

    if (resdata) {
      refresh();
      refreshCurrentAddress && refreshCurrentAddress();
    }
    onClose();
  };

  // Convert data to react-select format
  const provinceOptions: OptionType[] = provinces.map(p => ({ value: p.id, label: p.text }));
  const districtOptions: OptionType[] = districts.map(d => ({ value: d.id, label: d.text }));
  const wardOptions: OptionType[] = wards.map(w => ({ value: w.id, label: w.text }));

  return (
    <Modal id={id} onClose={onClose} title={"Địa chỉ giao hàng"}>


      <div className="modal-body">
        <div className="row g-4">
          <div className="form-group col-md-12">
            <div className="form-floating theme-form-floating">
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                id="fullname2"
                required
                data-required-error="Vui lòng nhập dữ liệu"
                maxLength={150}
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                }}
              />
              <label htmlFor="fullname2">Họ và tên</label>
            </div>
            {errors.name && <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.name}</div>}
          </div>
          <div className="form-group col-md-12">
            <div className="form-floating theme-form-floating">
              <input
                type="text"
                name="phone"
                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                id="phone2"
                required
                data-required-error="Vui lòng nhập dữ liệu"
                maxLength={50}
                value={phone}
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                }}
              />
              <label htmlFor="phone2">Số điện thoại</label>
            </div>
            {errors.phone && <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.phone}</div>}
          </div>
          {/* <input className="noReset noMapping" type="hidden" name="country_id" value={formData.country_id} /> */}
          <CustomSelect
            options={provinceOptions}
            value={provinceOptions.find(o => o.value === provinceId) || null}
            onChange={(option) => {
              setProvinceId(option?.value || '');
              if (errors.provinceId) setErrors(prev => ({ ...prev, provinceId: undefined }));
            }}
            label="Tỉnh/thành phố"
            error={errors.provinceId}
          />
          <CustomSelect
            options={districtOptions}
            value={districtOptions.find(o => o.value === districtId) || null}
            onChange={(option) => {
              setDistrictId(option?.value || '');
              if (errors.districtId) setErrors(prev => ({ ...prev, districtId: undefined }));
            }}
            label="Quận/huyện"
            error={errors.districtId}
            isDisabled={!provinceId}
          />
          <CustomSelect
            options={wardOptions}
            value={wardOptions.find(o => o.value === wardId) || null}
            onChange={(option) => {
              setWardId(option?.value || '');
              if (errors.wardId) setErrors(prev => ({ ...prev, wardId: undefined }));
            }}
            label="Phường/xã"
            error={errors.wardId}
            isDisabled={!districtId}
          />
          <div className="form-group col-md-12">
            <div className="form-floating theme-form-floating">
              <input
                type="text"
                name="address"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                required
                data-required-error="Vui lòng nhập dữ liệu"
                maxLength={255}
                value={address}
                onChange={e => {
                  setAddress(e.target.value);
                  if (errors.address) setErrors(prev => ({ ...prev, address: undefined }));
                }}
              />
              <label>Địa chỉ</label>
            </div>
            {errors.address && <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.address}</div>}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-animation btn-md fw-bold" data-bs-dismiss="modal" onClick={onClose}>Hủy</button>
        <button type="button" className="btn theme-bg-color btn-md fw-bold text-light submitAjax" onClick={handleSubmit}>
          Lưu lại
        </button>
      </div>
    </Modal>
  )
}

export default ModalSaveAddress;