import AdminController from "@src/controllers/AdminController.js";

export default class ConfigController extends AdminController {
  md = this.models.config;
  async update() {
    const configsToUpdate: Record<string, string> = {};

    // Các khóa dữ liệu đơn giản
    configsToUpdate.address = this.request.getPost('address');
    configsToUpdate.name = this.request.getPost('name');
    configsToUpdate.keyword = this.request.getPost('keyword');
    configsToUpdate.copyright = this.request.getPost('copyright');

    // Theme Colors (Đổi tên theo DB nếu cần, nhưng giữ theo POST key)
    configsToUpdate.theme_color1 = this.request.getPost('themeColor1');
    configsToUpdate.theme_color2 = this.request.getPost('themeColor2');

    // Mail Configs
    configsToUpdate.sendmail_account = this.request.getPost('sendmailAccount');
    configsToUpdate.sendmail_password = this.request.getPost('sendmailPassword');
    configsToUpdate.sendmail_domain = this.request.getPost('sendmailDomain');
    configsToUpdate.sendmail_type = this.request.getPost('sendmailType');
    configsToUpdate.sendmail_port = this.request.getPost('sendmailPort');
    configsToUpdate.sendmail_contact = this.request.getPost('sendmailContact');
    configsToUpdate.sendmail_ssl = this.request.getPost('sendmailSsl');

    // Contact & Social Links
    configsToUpdate.email = this.request.getPost('email');
    configsToUpdate.fb_link = this.request.getPost('fbLink');
    configsToUpdate.instagram_link = this.request.getPost('instagramLink');
    configsToUpdate.yt_link = this.request.getPost('ytLink');
    configsToUpdate.twitter_link = this.request.getPost('twitterLink');
    configsToUpdate.appstore_link = this.request.getPost('appstoreLink');
    configsToUpdate.playstore_link = this.request.getPost('playstoreLink');
    configsToUpdate.order_link = this.request.getPost('orderLink');
    configsToUpdate.hotline = this.request.getPost("hotline");
    configsToUpdate.phone = this.request.getPost("phone");
    configsToUpdate.fax = this.request.getPost("fax");
    configsToUpdate.contact_info = this.request.getPost("contactInfo");
    configsToUpdate.contact_info_bank = this.request.getPost("contactInfoBank");

    // Images & Layout
    configsToUpdate.background = this.request.getPost("background");
    configsToUpdate.logotext = this.request.getPost('logotext');
    configsToUpdate.logo = this.request.getPost('logo');
    configsToUpdate.image = this.request.getPost('image');
    configsToUpdate.favicon = this.request.getPost('favicon');
    configsToUpdate.container = this.request.getPost('container');

    // Các khóa cần xử lý HTML (như description/content)
    configsToUpdate.description = this.request.getPost('description', '', 'html');
    configsToUpdate.content = this.request.getPost('content', '', 'html');
    const updatePromises: Promise<boolean>[] = [];
    for (const [key, value] of Object.entries(configsToUpdate)) {
      updatePromises.push(
        this.md.updateValueByKey(key, value)
      );
    }
    if (updatePromises.length > 0) {
      await Promise.all(updatePromises);
    }
    this.resJsonData({ success: true, message: "Cấu hình đã được cập nhật thành công." });

  } catch(error: any) {
    console.error(error);
    // Phản hồi lỗi
    this.resJsonErr(error.message || "Không thể cập nhật cấu hình.");
  }

  async getAll() {
    try {
      // const configs = await this.md.find()
      const configs = await this.md.find("1", false, false);
      const result: Record<string, any> = {};

      for (const config of configs) {
        if (typeof config.key === "string" && config.key) {
          result[config.key] = config.value;
        }
      }
      this.resJsonData(result);
    } catch (error: any) {
      console.error(error);
      this.resJsonErr(error.message || "Failed to get configs");
    }
  }
}

