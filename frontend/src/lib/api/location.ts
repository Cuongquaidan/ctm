import { locations } from "@/assets/data/Location";
import { LocationT } from "@/types/common.types";

export async function getAllLocations(): Promise<LocationT[]> {
    //const uri = '/locations';
    // const res = await apiFetch(uri);
    // return res.data;
    return locations;
}

export async function getAllLocationsByUrl(
    url: string,
    queries?: { [key: string]: any }
): Promise<LocationT[]> {
    // const uri = buildURIWithQueries(url, queries);
    // const res = await apiFetchFullUrl(uri);
    // return res.data;
    return locations;
}

export async function getSelectedLocation(): Promise<LocationT> {
    // const uri = '/locations/selected';
    // const res = await apiFetch(uri);
    // return res.data;
    return { id: 1, name: "Alabama", minPrice: 130 };
}

export async function setSelectedLocation(locationId: number): Promise<any> {
    // const uri = '/locations/selected';
    // const res = await apiFetch(uri, {
    //     method: 'POST',
    //     body: JSON.stringify({ locationId })
    // });
    // return res.data;
    return { success: true };
}
