import CoreController from "@src/controllers/CoreController.js";

export default class ConfigController extends CoreController {
  md = this.models.config;

  async getAll() {
    try {
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

