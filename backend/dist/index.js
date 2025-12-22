import Te from "dotenv";
import Le from "fastify";
import ie from "argon2";
import ke from "bcrypt";
import At from "jsonwebtoken";
import { google as _t } from "googleapis";
import Se from "svg-captcha";
import J from "path";
import K from "fs";
import qe from "@fastify/multipart";
import Ne from "@fastify/static";
import Ae from "@fastify/formbody";
import xe from "@fastify/cookie";
import Oe from "@fastify/session";
import Me from "@fastify/cors";
import { pipeline as $e } from "stream/promises";
import Je from "@fastify/mysql";
import { v4 as Ee } from "uuid";
import { UAParser as Re } from "ua-parser-js";
class $t {
  constructor() {
    this.routes = [];
  }
  static getMethod(t) {
    return t.method ? t.method : "get";
  }
  add(t, e = []) {
    const s = [];
    e.forEach((r) => {
      r.link = t + r.link, s.push(r);
    }), this.routes.length ? this.routes = [...this.routes, ...s] : this.routes = s;
  }
  addGS(t, e, s) {
    const r = [
      { link: t + "/getList", modules: s, controller: e, action: "index" },
      { link: t + "/detail/:code([0-9]+)", modules: s, controller: e, action: "detail" },
      { link: t + "/create", modules: s, controller: e, action: "update", method: "post" },
      { link: t + "/edit/:code([0-9]+)", modules: s, controller: e, action: "update", method: "post" },
      { link: t + "/copy", modules: s, controller: e, action: "copy", method: "post" },
      { link: t + "/import", modules: s, controller: e, action: "import", method: "post" },
      { link: t + "/export", modules: s, controller: e, action: "export" },
      { link: t + "/delete/:code([0-9]+)", modules: s, controller: e, action: "deleteone" },
      { link: t + "/delete", modules: s, controller: e, action: "delete", method: "post" }
    ];
    this.routes.length ? this.routes = [...this.routes, ...r] : this.routes = r;
  }
  getRouter() {
    return this.routes;
  }
}
class M {
  static async makePassword(t) {
    return await ie.hash(t);
  }
  // static async checkPassword(value: any, hashedValue: any) {
  //     return await argon2.verify(hashedValue, value);
  // }
  static async checkPassword(t, e) {
    if (e.startsWith("$2") || e.startsWith("$10$")) {
      const s = e.replace(/^\$2y\$/i, "$2b$");
      return await ke.compare(t, s);
    } else if (e.startsWith("$argon2"))
      return await ie.verify(e, t);
    return !1;
  }
  static stripTag(t) {
    return t.toLowerCase().replace(/[!@#%&*(){}~/,;<>.?^=+|£$[]\\]/g, "").replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a").replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e").replace(/(ì|í|ị|ỉ|ĩ)/g, "i").replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o").replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u").replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y").replace(/(đ)/g, "d").replace(/[^ a-z0-9]+/g, "-").replace(/[^a-z0-9]+/g, "-").trim();
  }
  static randomText(t, e = !1) {
    let s = "", r = "0123456789";
    r = e ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" + r : r;
    const o = r.length;
    let n = 0;
    for (; n < t; )
      s += r.charAt(Math.floor(Math.random() * o)), n += 1;
    return s;
  }
  static removeVietnameseTones(t) {
    return t ? String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase() : "";
  }
  static slugify(t) {
    return t.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
  }
  static rmStaticPath(t, e = "png|jpg|jpeg|gif|svg") {
    const s = `/static/([^/]*?\\.(${e}))/`, r = t.match(s);
    return r && r[1] ? r[1] : null;
  }
  static async createAlias(t, e) {
    const s = this.slugify(t.name), r = { alias: s };
    return t._id && (r._id = { $ne: t._id }), await e.exists(r) ? `${s}-${Date.now()}` : s;
  }
  static generateKeywords(t = "") {
    return t ? t.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/).filter((e, s, r) => e.length > 2 && r.indexOf(e) === s).join(", ") : "";
  }
  static dateNow() {
    return (/* @__PURE__ */ new Date()).toLocaleString("sv-SE", {
      timeZone: "Asia/Ho_Chi_Minh",
      hour12: !1
    }).replace("T", " ");
  }
  static formatDate(t, e = "YYYY-MM-DD HH:mm:ss") {
    const s = (d) => d < 10 ? "0" + d : d, r = t.getFullYear(), o = s(t.getMonth() + 1), n = s(t.getDate()), a = s(t.getHours()), i = s(t.getMinutes()), c = s(t.getSeconds());
    switch (e) {
      case "YYYY-MM-DD":
        return `${r}-${o}-${n}`;
      case "DD/MM/YYYY":
        return `${n}/${o}/${r}`;
      case "YYYY-MM-DD HH:mm:ss":
        return `${r}-${o}-${n} ${a}:${i}:${c}`;
      default:
        return t.toISOString();
    }
  }
  static {
    this.getValue = (t, e, s = "") => t?.[e] !== void 0 ? t[e] : s;
  }
  static sumArrCol(t, e) {
    return t.reduce((s, r) => s + (r[e] ?? 0), 0);
  }
}
class ft {
  static decode(t) {
    const { JWT_KEY: e } = process.env;
    return At.verify(t, e || "");
  }
  static createToken(t, e) {
    const { JWT_KEY: s, JWT_AUD: r, JWT_ISS: o } = process.env, n = Number(process.env.JWT_TIMEOUT || 3600), a = e.ip, i = e.headers["user-agent"], c = {
      iss: o,
      aud: r,
      sub: t.id,
      name: t.fullname,
      ip: a,
      us: i,
      expired: Date.now() + n * 500
    };
    return At.sign(c, s || "", { algorithm: "HS256" });
  }
  static verifyToken(t) {
    const e = t.cookies.accessToken;
    if (!e) throw new Error("invalid_cookie_accessToken");
    const s = this.decode(e);
    if (!s?.sub) throw new Error("invalid_userid_accessToken");
    const r = t.headers["user-agent"] || "unkowwn";
    if (s.us !== r) throw new Error("invalid_us_accessToken");
    return s.accessToken = e, s;
  }
  static checkSecretKey(t) {
    if (t != process.env.JWT_SECRET_KEY)
      throw new Error("invalid_secret_key");
  }
}
class B {
  constructor(t, e, s, r) {
    this.module = "admins", this.langCode = "vi", this.langId = "1", this.params = {}, this.userId = 0, this.customerId = 0, this.groupId = 0, this.req = t, this.res = e, this.params = t.params, this.models = s.models, this.pool = r;
  }
  async beforeRouter() {
  }
  async autoload() {
  }
  resJson(t) {
    this.res.send(t);
  }
  resJsonData(t, e = 200) {
    this.res.send({ data: t, status: e });
  }
  resJsonErr(t, e = 400) {
    this.res.send({ msg: t, status: e });
  }
}
class Jt extends B {
  async beforeRouter() {
    try {
      const e = (await this.checkToken()).sub, s = await this.models.user.findOne({ id: e, status: 1 });
      if (!s) throw new Error("invalid_user");
      this.user = s, this.userId = Number(e), this.userObjectId = s.id, this.groupId = s.groupId;
      const r = typeof this.controller == "function" ? this.controller.name.charAt(0).toLowerCase() + this.controller.name.slice(1) : this.controller;
      if (!await this.models.permission.checkPermission(this.module, r, this.action, this.params, this.groupId))
        throw new Error("invalid_permission_403");
    } catch (t) {
      throw new Error(t.message);
    }
  }
  async checkToken() {
    const t = ft.verifyToken(this.req), e = t.sub, s = await this.models.usertoken.findOne({ userId: e, accessToken: t.accessToken });
    if (!s)
      throw new Error("invalid_user_token");
    if (s.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
    return s.expiredAt < Date.now() && await this.models.usertoken.refreshToken(this), t;
  }
}
let it = class extends Jt {
  async profile() {
    try {
      const t = await this.models.user.findOne(this.user.id);
      if (!t) throw new Error("invalid_500");
      t.password = null, t.groupName = await this.models.groups.getName(t.group_id), this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async editProfile() {
    try {
      let t = await this.models.user.findOne({ id: this.user.id });
      if (!t) throw new Error("invalid_500");
      const e = this.models.user, s = { ...t };
      t.email = this.request.getPost("email"), t.fullname = this.request.getPost("fullname"), t.username = this.request.getPost("username"), t.gender = this.request.getPost("gender"), t.group_id = this.request.getPost("group_id"), t.phone = this.request.getPost("phone"), t.updated_at = /* @__PURE__ */ new Date(), t = await e.vdSave(t, e.validate), t.password = null, s.password = null, this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async changePassword() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_post_403");
      let t = await this.models.user.findOne({ _id: this.user.id });
      if (!t) throw new Error("invalid_500");
      const e = this.request.getPost("currentPassword"), s = this.request.getPost("confirmPassword"), r = this.request.getPost("password");
      if (r !== s)
        throw new Error("Mật khẩu và xác nhận mật khẩu không khớp.");
      if (!M.checkPassword(e, t.password))
        throw new Error("invalid_500");
      const o = {
        password: r
      }, n = this.models.user;
      n.validate(o, n.validatePassword) || n.getErrors().forEach((a) => {
        throw new Error(a);
      }), t.password = await M.makePassword(this.request.getPost("password")), t = await n.vdSave(t), t.password = null, this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async redirectToLinkGoogle() {
    try {
      if (!this.userObjectId) throw new Error("unauthorized_401");
      if (!await this.models.user.findOne({ _id: this.user.id })) throw new Error("invalid_500");
      const s = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.GOOGLE_LINK_CALLBACK_URL
      }).generateAuthUrl({
        access_type: "offline",
        scope: ["openid", "profile", "email"],
        prompt: "consent"
      });
      this.res.redirect(s);
    } catch (t) {
      this.res.status(400).send({ msg: t.message });
    }
  }
  async linkGoogleCallback() {
    try {
      const t = this.models.user;
      if (!this.userObjectId) throw new Error("unauthorized_401");
      let e = await this.models.user.findOne({ id: this.user.id });
      if (!e) throw new Error("invalid_500");
      const s = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.GOOGLE_LINK_CALLBACK_URL
      }), r = this.request.get("code");
      if (!r) throw new Error("invalid_code");
      const { tokens: o } = await s.getToken(r);
      s.setCredentials(o);
      const n = o.id_token;
      if (!n) throw new Error("invalid_id_token");
      const i = (await s.verifyIdToken({
        idToken: n,
        audience: process.env.GOOGLE_CLIENT_ID
      })).getPayload();
      if (!i) throw new Error("invalid_token");
      const { sub: c, email: d } = i, l = await this.models.user.findOne({ id: this.user.id });
      if (!l) throw new Error("invalid_user_404");
      if (await this.models.user.findOne({
        $or: [{ googleId: c }, { googleEmail: d }],
        id: { $ne: this.user.id }
      })) throw new Error("google_account_already_linked");
      l.googleId = c, l.googleEmail = d, e = await t.vdSave(e, t.validate);
      const m = process.env.SITE_URL || "http://localhost:5173";
      this.res.redirect(`${m}/account?linked=success`);
    } catch (t) {
      const e = process.env.SITE_URL || "http://localhost:5173";
      this.res.redirect(`${e}/account?error=${encodeURIComponent(t.message)}`);
    }
  }
  async unlinkGoogle() {
    try {
      const t = this.models.user;
      if (!this.userObjectId) throw new Error("unauthorized_401");
      let e = await this.models.user.findOne({ id: this.user.id });
      if (!e) throw new Error("invalid_user_404");
      const s = await this.models.user.findOne({ id: this.user.id });
      if (!s) throw new Error("invalid_user_404");
      s.googleId = null, s.googleEmail = null, e = await t.vdSave(e, t.validate), this.resJsonData({ msg: "unlink_google_success" });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}, st = class extends B {
  async login() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getHeader("Secret-Key");
      if (!t) throw new Error("invaild_empty_secretkey");
      ft.checkSecretKey(t);
      const e = this.request.getPost("username"), s = this.request.getPost("password"), r = {
        username: e,
        password: s
      }, o = this.models.user;
      await o.validate(r, o.validateLogin) || o.getErrors().forEach((i) => {
        throw new Error(i);
      });
      const n = await o.findOne({ username: e, is_deleted: 0, status: 1 });
      if (!n) throw new Error("invalid_user_authentication");
      if (!await M.checkPassword(s, n.password))
        throw new Error("invalid_authentication");
      const a = await this.models.usertoken.createByUser(n, this.req);
      return this.res.setCookie("refreshToken", a.refreshToken, {
        httpOnly: !0,
        secure: !0,
        sameSite: "strict",
        path: "/",
        maxAge: 3600 * 24 * 7
      }), this.res.setCookie("accessToken", a.accessToken, {
        httpOnly: !0,
        secure: !0,
        sameSite: "strict",
        path: "/",
        maxAge: 3600 * 24 * 7
      }), this.resJsonData({ accessToken: a.accessToken, expiredAt: a.expiredAt });
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async logout() {
    try {
      const t = this.req.cookies?.refreshToken;
      return t ? (this.res.clearCookie("refreshToken", { path: "/" }), this.res.clearCookie("expiredAt", { path: "/" }), this.res.clearCookie("accessToken", { path: "/" }), await this.models.usertoken.findOne({ refreshToken: t }), this.resJsonData({ msg: "logout_successful" })) : this.resJsonData({ msg: "logout_failed" });
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async refreshToken() {
    try {
      const t = await this.models.customertoken.refreshToken(this);
      this.resJsonData({ expiredAt: t.expiredAt });
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async forget() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getPost("email");
      if (!await this.models.user.findOne({ email: t, is_deleted: 0 }))
        throw new Error("invalid_404");
      const s = this.models.userforget, r = {};
      r.email = t;
      let o = await this.models.user.findOne(r);
      o || (o = {}, o.email = t), o.otp = Math.floor(1e5 + Math.random() * 9e5), o.updated_at = Date.now(), await s.vdSave(o), this.resJsonData({ email: t, otp: o.otp });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetConfirmOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.userforget, e = this.request.getPost("email"), s = this.request.getPost("otp"), r = await t.findOne({ email: e, otp: s });
      if (!r)
        throw new Error("invalid_otp");
      r.updated_at = /* @__PURE__ */ new Date(), await t.vdSave(r), this.resJsonData({ otp: r.otp });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetResendOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.userforget, e = this.request.getPost("email"), s = await t.findOne({ email: e });
      if (!s) throw new Error("invalid_email");
      if (!await this.models.user.findOne({ email: e, is_deleted: 0 }))
        throw new Error("invalid_404");
      s.otp = Math.floor(1e5 + Math.random() * 9e5), s.updated_at = /* @__PURE__ */ new Date(), await t.vdSave(s), this.resJsonData({ email: e });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetPassword() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getPost("email"), e = this.request.getPost("otp"), s = this.request.getPost("password"), r = this.models.userforget, o = await r.findOne({ email: t, otp: e });
      if (!o) throw new Error("invalid_otp");
      const n = this.models.user, a = await n.findOne({ email: t, is_deleted: 0 });
      if (!a) throw new Error("invalid_forget");
      const i = {
        email: t,
        password: s
      };
      n.validate(i, n.validateForgetPassowrd) || n.getErrors().forEach((c) => {
        throw new Error(c);
      }), a.password = await M.makePassword(s), a.updated_at = /* @__PURE__ */ new Date(), await n.vdSave(a), await r.deleteOne(o.id), this.resJsonData({ email: t });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getCaptcha() {
    try {
      const t = Se.create({
        size: 2,
        noise: 3,
        color: !0,
        background: "#cc9966",
        ignoreChars: "0o1il"
      });
      this.req.session.captcha = t.text, this.res.type("image/svg+xml"), this.res.send(t.data);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async redirectToGoogle() {
    try {
      const e = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.CALLBACK_URL
      }).generateAuthUrl({
        access_type: "offline",
        scope: ["openid", "profile", "email"],
        prompt: "consent",
        redirect_uri: "http://localhost:3000/googleCallback",
        client_id: process.env.GOOGLE_CLIENT_ID
      });
      this.res.redirect(e);
    } catch (t) {
      this.res.status(400).send({ msg: t.message });
    }
  }
  async googleCallback() {
    try {
      const t = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri: process.env.CALLBACK_URL
      }), e = this.request.get("code");
      if (!e) throw new Error("missing_code");
      const { tokens: s } = await t.getToken(e);
      t.setCredentials(s);
      const r = s.id_token;
      if (!r) throw new Error("invaild_idToken");
      const n = (await t.verifyIdToken({
        idToken: r,
        audience: process.env.GOOGLE_CLIENT_ID
      })).getPayload(), { sub: a, email: i } = n, c = this.models.user;
      let d = await c.findOne({ googleId: a });
      if (!d) throw new Error("invalid_user");
      d.googleId = a, d.googleEmail = i, d.updated_at = /* @__PURE__ */ new Date(), d = await c.vdSave(d, c.validate);
      const l = await this.models.usertoken.createByUser(d, this.req);
      this.res.setCookie("refreshToken", l.refreshToken, {
        httpOnly: !0,
        secure: !0,
        sameSite: "strict",
        path: "/",
        maxAge: 3600 * 24 * 7
      }), this.res.setCookie("accessToken", l.accessToken, {
        httpOnly: !0,
        secure: !0,
        sameSite: "strict",
        path: "/",
        maxAge: 3600 * 24 * 7
      });
      const u = process.env.SITE_URL || "http://localhost:5173";
      this.res.redirect(u);
    } catch (t) {
      this.res.status(400).send({ msg: t.message });
    }
  }
};
class rt {
  constructor(t, e = "static") {
    this.uploadType = "static", this.files = t, this.uploadType = e;
  }
  // async saveExcel(rows: any[], filePath: string) {
  //     const ws = XLSX.utils.json_to_sheet(rows);   // tạo sheet từ mảng object
  //     const wb = XLSX.utils.book_new();            // tạo workbook mới
  //     XLSX.utils.book_append_sheet(wb, ws, 'Logs'); // thêm sheet
  //     XLSX.writeFile(wb, filePath);               // ghi ra file
  // }
  async copyFiles(t) {
    if (t.length) {
      const e = rt.getUploadDir(this.uploadType);
      for await (const s of t) {
        const r = J.join(e, s.src);
        if (K.existsSync(r)) {
          const o = J.join(e, s.dist);
          await K.promises.copyFile(r, o);
        }
      }
    }
  }
  async uploadFile(t = "fieldName", e = "") {
    try {
      const s = this.files[t];
      return !s || !s[0] ? !1 : await this.upload(s[0], e);
    } catch (s) {
      throw new Error(s);
    }
  }
  async uploadFiles(t = "fieldName", e = "") {
    try {
      const s = [], r = this.files[t];
      if (!r) return s;
      for await (const o of r) {
        const n = await this.upload(o, e);
        n && s.push(n);
      }
      return s;
    } catch (s) {
      throw new Error(s);
    }
  }
  async upload(t, e = "") {
    try {
      let s = t.filename;
      const r = rt.getUploadDir(this.uploadType), o = e ? J.join(r, e) : r;
      K.existsSync(o) || K.mkdirSync(o);
      let n = J.join(o, s);
      return K.existsSync(n) && (s = `${t.basename}${Date.now()}${t.ext}`, n = J.join(o, s)), K.existsSync(t.path) ? (await K.promises.rename(t.path, n), e ? J.posix.join(e, s) : s) : !1;
    } catch (s) {
      throw new Error(s);
    }
  }
  async checkFile(t = "file", e = "OfficeFile") {
    try {
      const s = this.files[t];
      if (!s) return;
      for await (const r of s) {
        const o = "check" + e;
        if (!(o in rt))
          throw new Error("Method does not exist: " + o);
        rt[o](r.filename, r.mimetype);
        return;
      }
      return;
    } catch (s) {
      throw new Error(s);
    }
  }
  static {
    this.removeFiles = (t) => {
      if (t === !1 || !Array.isArray(t)) return !1;
      for (const e of t)
        this.removeFile(e);
      return !0;
    };
  }
  static {
    this.removeFile = (t, e = "static") => {
      if (!t) return !1;
      const s = J.join(rt.getUploadDir(e), t);
      return K.existsSync(s) && K.unlinkSync(s), !0;
    };
  }
  static {
    this.renameFile = (t) => {
      const e = J.extname(t);
      return `${J.basename(t, e)}_${Date.now()}${e}`;
    };
  }
  // static async checkMagicNumber(filePart: MultipartFile) {
  //     const stream = filePart.file;
  //     const chunks: Buffer[] = [];
  //     for await (const chunk of stream) {
  //         chunks.push(chunk as Buffer);
  //         break;
  //     }
  //     const buffer = Buffer.concat(chunks).subarray(0, 4);
  //     const hex = buffer.toString("hex");
  //     if (hex.startsWith("ffd8ff")) return true;       // JPEG
  //     if (hex === "89504e47") return true;             // PNG
  //     if (hex.startsWith("25504446")) return true;     // PDF
  //     if (hex === "504b0304") return true;             // ZIP, DOCX, XLSX, PPTX
  //     return false;
  // }
  static getUploadDir(t = "static") {
    return t == "static" ? J.join(J.resolve(), "public", "static") : t == "public" ? J.join(J.resolve(), "public") : t == "uploads" ? J.join(J.resolve(), "uploads") : "";
  }
  static checkDefFile(t, e, s = !0) {
    if (!/(.*)\.(png|jpeg|jpg|pdf|xls|xlsx|doc|docx|ppt|pptx)$/i.test(t)) {
      if (s) throw new Error(`Định dạng tập tin ${t} không được phép`);
      return !1;
    }
    if (![
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
      "application/msword",
      "application/vnd.ms-excel",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ].includes(e)) {
      if (s) throw new Error(`Định dạng tập tin ${t} không được phép`);
      return !1;
    }
    return !0;
  }
  static checkOfficeFile(t, e) {
    try {
      if (!/(.*)\.(pdf|xls|xlsx|doc|docx|ppt|pptx)$/i.test(t))
        throw new Error(`Tập tin ${t} không đúng định dạng (.pdf,.xls,.xlsx,.doc,.docx,.docx,.ppt,.pptx)`);
      if (![
        "application/pdf",
        "application/msword",
        "application/vnd.ms-excel",
        "application/vnd.ms-powerpoint",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ].includes(e))
        throw new Error(`Tập tin ${t} không đúng định dạng (.pdf,.xls,.xlsx,.doc,.docx,.docx,.ppt,.pptx)`);
    } catch (s) {
      throw new Error(s);
    }
  }
  static checkImgFile(t, e) {
    try {
      if (!/(.*)\.(png|jpeg|jpg)$/i.test(t))
        throw new Error(`Ảnh ${t} không đúng định dạng (.png,.jpeg,.jpg,.jfif)`);
      if (!["image/jpeg", "image/png", "image/jpg"].includes(e))
        throw new Error(`Ảnh ${t} không đúng định dạng (.png,.jpeg,.jpg,.jfif)`);
    } catch (s) {
      throw new Error(s);
    }
  }
  static checkVideoFile(t, e) {
    try {
      if (!/(.*)\.(mp4|mkv|webm|mov|avi)$/i.test(t))
        throw new Error(`Video ${t} không đúng định dạng (.mp4,.mkv,.webm,.mov,.avi)`);
      if (!["video/mp4", "video/mkv", "video/webm", "video/mov", "video/avi"].includes(e))
        throw new Error(`Video ${t} không đúng định dạng (.mp4,.mkv,.webm,.mov,.avi)`);
    } catch (s) {
      throw new Error(s);
    }
  }
}
class j extends Jt {
  constructor() {
    super(...arguments), this.importRow = 2, this.actionActive = ["index", "detail", "create", "edit", "delete", "deleteone"], this.is_deleted = !1, this.isImage = !1, this.imageField = "image", this.isGallery = !1, this.galleryField = "gallery";
  }
  async index() {
    try {
      let t = await this.md.getDatas(this.request, this.user, this.is_deleted);
      t = await this.indexBefore(t), this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detail(t = 0) {
    try {
      if (!this.actionActive.includes("detail"))
        throw new Error("invalid_403");
      const e = { id: t };
      this.is_deleted && (e.is_deleted = 0);
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async update(t = 0) {
    await this.md.getConnection();
    try {
      if (await this.md.conn.beginTransaction(), !this.request.isPost()) throw new Error("invalid_method_403");
      let e = {}, s = {};
      if (t) {
        if (!this.actionActive.includes("edit"))
          throw new Error("invalid_403");
        const r = { id: t };
        if (r.id = t, this.is_deleted && (r.is_deleted = 0), e = await this.md.findOne(r), !e) throw new Error("invalid_404");
        s = { ...e }, e.updated_at = M.dateNow(), e.updated_by = this.userObjectId;
      } else {
        if (!this.actionActive.includes("create"))
          throw new Error("invalid_403");
        this.is_deleted && (e.is_deleted = 0);
        const r = M.dateNow();
        e.created_at = r, e.updated_at = r, e.created_by = this.user.id, e.updated_by = this.user.id;
      }
      e = await this.updateBefore(e, s), e = await this.updateBeforeSave(e), e = await this.md.vdSave(e, this.md.vdObject), await this.updateAfter(e, s), await this.md.conn.commit(), this.resJsonData(e);
    } catch (e) {
      await this.md.conn.rollback(), this.resJsonErr(e.message);
    }
  }
  // async copy() {
  //     try {
  //         // this.db.start();
  //         const isCre = await PermissionModel.checkPermission(this.module, this.controller, 'update', { code: 0 }, this.group_id)
  //         if (!this.actionActive.includes('copy') || !isCre || !this.request.isPost()) {
  //             throw new Error('invalid_403');
  //         }
  //         let listId: number[] = await this.request.getPost('selected', [], 'ids');
  //         if (!listId.length) throw new Error('invalid_500');
  //         const mdClass = new this.md();
  //         const imageCopy = [];
  //         // const ids = [];
  //         const lastItem: any = await this.md.findOne().sort({ id: -1 }).limit(1);
  //         let lastid = lastItem ? lastItem.id : 0;
  //         for await (const id of listId) {
  //             const item = await this.md.findOne({ id: id });
  //             if (!item) throw new Error('invalid_404');
  //             let itemCopy: any = item.toObject();
  //             itemCopy = await this.copyBefore(itemCopy);
  //             itemCopy.created_by = this.userObjectId;
  //             itemCopy.updated_by = this.userObjectId;
  //             if (this.is_deleted) itemCopy.is_deleted = 0;
  //             delete itemCopy._id;
  //             delete itemCopy.id;
  //             if (this.isImage && this.imageField && item?.[this.imageField]) {
  //                 itemCopy[this.imageField] = FileUpload.renameFile(item[this.imageField]);
  //                 imageCopy.push({
  //                     src: item[this.imageField],
  //                     dist: itemCopy[this.imageField]
  //                 });
  //             }
  //             if (this.isGallery && this.galleryField && item?.[this.galleryField]) {
  //                 itemCopy[this.galleryField] = item[this.galleryField].map((file: string) => {
  //                     const newFile = FileUpload.renameFile(file);
  //                     imageCopy.push({
  //                         src: file,
  //                         dist: newFile
  //                     });
  //                     return newFile;
  //                 });
  //             }
  //             const newItemId = await mdClass.vdSave(itemCopy, mdClass.vdObject);
  //             if (!newItemId) throw new Error('invalid_500');
  //             // ids.push(newItemId);
  //             await this.copyAfter(id, itemCopy.id);
  //         }
  //         const upload = new FileUpload(this.request.files, 'static');
  //         await upload.copyFiles(imageCopy);
  //         await this.db.commit();
  //         this.resJsonData({});
  //     } catch (error: any) {
  //         await this.db.abort();
  //         this.resJsonErr(error.message);
  //     } finally {
  //         await this.db.end();
  //     }
  // }
  async import() {
  }
  async export() {
  }
  async removeFiles(t) {
    const e = [];
    return this.isImage && this.imageField && t?.[this.imageField] && e.push(t[this.imageField]), this.isGallery && this.galleryField && Array.isArray(t?.[this.galleryField]) && e.push(...t[this.galleryField]), e;
  }
  async delete() {
    const t = [];
    try {
      if (!this.actionActive.includes("delete") || !this.request.isPost())
        throw new Error("invalid_403");
      const e = await this.request.getPost("selected", [], "ids");
      if (!e.length)
        throw new Error("invalid_500");
      for (const s of e) {
        const r = { id: s, is_deleted: 0 };
        let o = await this.md.findOne(r);
        if (!o) throw new Error("invalid_404");
        if (!this.verifyDel(o)) throw new Error("invalid_403");
        t.push(...await this.removeFiles(o));
        const n = { ...o };
        this.is_deleted ? (await this.deleteBefore(o), o.is_deleted = 1, o = await this.md.vdSave(o), await this.deleteAfter(o)) : (await this.deleteBefore(o), await this.md.findByIdAndDelete(o.id), await this.deleteAfter(o));
      }
      rt.removeFiles(t), this.resJsonData([]);
    } catch (e) {
      this.resJsonErr(e.message);
    } finally {
    }
  }
  async deleteone(t = 0) {
    const e = [];
    try {
      if (!this.actionActive.includes("deleteone"))
        throw new Error("invalid_403");
      const s = {};
      s.id = t;
      let r = await this.md.findOne({ ...s, is_deleted: 0 });
      if (!r) throw new Error("invalid_404");
      if (!this.verifyDel(r)) throw new Error("invalid_403");
      e.push(...await this.removeFiles(r));
      const o = { ...r };
      this.is_deleted ? (await this.deleteBefore(r), r.is_deleted = 1, r = await this.md.vdSave(r), await this.deleteAfter(r)) : (await this.deleteBefore(r), await this.md.deleteOne({ id: r.id }), await this.deleteAfter(r)), rt.removeFiles(e), this.resJsonData([]);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
  async indexBefore(t) {
    return t;
  }
  async detailBefore(t) {
    return t;
  }
  async importBeforeFor(t, e) {
  }
  async importBefore(t, e, s) {
    return s;
  }
  async importAfter(t, e, s, r) {
  }
  async importAfterFor(t) {
  }
  async updateBefore(t, e) {
    return t;
  }
  async updateBeforeSave(t) {
    return t;
  }
  async updateAfter(t, e) {
  }
  async copyBefore(t) {
    return t;
  }
  async copyAfter(t, e) {
  }
  async exportBefore(t) {
    return t;
  }
  async deleteBefore(t) {
  }
  async deleteAfter(t) {
  }
  async verifyDel(t) {
    return !0;
  }
}
class Ft extends j {
  constructor() {
    super(...arguments), this.md = this.models.adminfunction, this.actionActive = ["create", "edit", "delete", "deleteone"];
  }
  async index() {
    try {
      let t;
      t.items = await this.md.getFuncMenu(this.groupId), this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.url = this.request.getPost("url"), t.module = this.request.getPost("module"), t.controller = this.request.getPost("controller"), t.action = this.request.getPost("action"), t.menu_icon = this.request.getPost("menu_icon"), t.code = this.request.getPost("code", 0, "int"), t.parent_id = this.request.getPost("parent_id", 0, "int"), t.sort_order = this.request.getPost("sort_order", 0, "int"), t.status = this.request.getPost("status", 0, "int"), t;
  }
  async getFuncMenu() {
    try {
      const t = await this.md.getFuncMenu(this.groupId);
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getPermissonMenu() {
    try {
      const t = await this.md.getPermissonMenu(this.groupId);
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class Tt extends j {
  constructor() {
    super(...arguments), this.md = this.models.groups, this.actionActive = ["create", "edit", "detail"];
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.excerpt = this.request.getPost("excerpt"), t.status = this.request.getPost("status", 1, "int"), t;
  }
  async getFunctionIds(t) {
    try {
      const e = await this.md.findOne({ id: t });
      if (!e || e.id === 1) throw new Error("invalid_403");
      const s = await this.models.adminfunction.getFunctionIds(t);
      return this.resJsonData(s);
    } catch (e) {
      return this.resJsonErr(e.message);
    }
  }
  async editRole(t) {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      if (!await this.md.findOne({ id: t })) throw new Error("invalid_404");
      const s = this.request.getPost("functionIds", [], "raw"), r = this.request.getPost("functionOldIds", [], "raw"), o = s.map((i) => i.id), n = r.map((i) => i.id).filter((i) => !o.includes(i));
      n.length > 0 && await this.md.deleteMany({ adminFunctionId: { $in: n }, group_id: t });
      const a = [];
      for await (const i of s) {
        const c = i.id, d = i.vf;
        if (![1, 2].includes(i.vf)) throw new Error("invalid_vf_function");
        const l = await this.models.adminfunction.findOne({ id: c });
        if (!l) throw new Error("invalid_admin_function");
        let u = await this.models.adminfunction.findOne({ group_id: t, adminFunctionId: c });
        if (!u)
          throw new Error("invaild_adminfunction");
        u || (u = {}, u.group_id = t, u.adminFunctionId = c), u.module = l.module, u.controller = l.controller, u.action = l.action, u.code = l.code, u.vf = d, u = await this.md.vdSave(u), a.push(u.id);
      }
      return this.resJsonData(a);
    } catch (e) {
      return this.resJsonErr(e.message);
    }
  }
  async checkPermission() {
    try {
      const t = this.request.get("controller"), e = this.request.get("action"), s = this.request.get("code"), r = await this.models.permission.checkPermission("admins", t, e, { code: s }, this.groupId);
      this.resJson({ permission: r });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class ce extends j {
  constructor() {
    super(...arguments), this.md = this.models.user, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t) {
    if (t.fullname = this.request.getPost("fullname"), t.phone = this.request.getPost("phone"), t.gender = this.request.getPost("gender"), t.email = this.request.getPost("email"), t.status = this.request.getPost("status"), t.group_id = this.request.getPost("group_id"), !t.group_id) throw new Error("invalid_group");
    if (t.group_id === 1) throw new Error("invaild_group");
    const e = await this.models.groups.getById(t.group_id);
    if (!e) throw new Error("invaild_group");
    if (t.group_id = e.id, !t.id) {
      t.username = this.request.getPost("username");
      const s = this.request.getPost("password"), r = this.request.getPost("confirmPassword");
      if (s) {
        if (s !== r)
          throw new Error("Mật khẩu và xác nhận mật khẩu không khớp.");
        await this.md.validate({ password: s }, this.md.validatePassword) || this.md.getErrors().forEach((o) => {
          throw new Error(o);
        }), t.password = await M.makePassword(s);
      }
    }
    return t;
  }
}
let de = class extends Jt {
  constructor() {
    super(...arguments), this.md = this.models.config;
  }
  async update() {
    const t = {};
    t.address = this.request.getPost("address"), t.name = this.request.getPost("name"), t.keyword = this.request.getPost("keyword"), t.copyright = this.request.getPost("copyright"), t.theme_color1 = this.request.getPost("themeColor1"), t.theme_color2 = this.request.getPost("themeColor2"), t.sendmail_account = this.request.getPost("sendmailAccount"), t.sendmail_password = this.request.getPost("sendmailPassword"), t.sendmail_domain = this.request.getPost("sendmailDomain"), t.sendmail_type = this.request.getPost("sendmailType"), t.sendmail_port = this.request.getPost("sendmailPort"), t.sendmail_contact = this.request.getPost("sendmailContact"), t.sendmail_ssl = this.request.getPost("sendmailSsl"), t.email = this.request.getPost("email"), t.fb_link = this.request.getPost("fbLink"), t.instagram_link = this.request.getPost("instagramLink"), t.yt_link = this.request.getPost("ytLink"), t.twitter_link = this.request.getPost("twitterLink"), t.appstore_link = this.request.getPost("appstoreLink"), t.playstore_link = this.request.getPost("playstoreLink"), t.order_link = this.request.getPost("orderLink"), t.hotline = this.request.getPost("hotline"), t.phone = this.request.getPost("phone"), t.fax = this.request.getPost("fax"), t.contact_info = this.request.getPost("contactInfo"), t.contact_info_bank = this.request.getPost("contactInfoBank"), t.background = this.request.getPost("background"), t.logotext = this.request.getPost("logotext"), t.logo = this.request.getPost("logo"), t.image = this.request.getPost("image"), t.favicon = this.request.getPost("favicon"), t.container = this.request.getPost("container"), t.description = this.request.getPost("description", "", "html"), t.content = this.request.getPost("content", "", "html");
    const e = [];
    for (const [s, r] of Object.entries(t))
      e.push(
        this.md.updateValueByKey(s, r)
      );
    e.length > 0 && await Promise.all(e), this.resJsonData({ success: !0, message: "Cấu hình đã được cập nhật thành công." });
  }
  catch(t) {
    console.error(t), this.resJsonErr(t.message || "Không thể cập nhật cấu hình.");
  }
  async getAll() {
    try {
      const t = await this.md.find("1", !1, !1), e = {};
      for (const s of t)
        typeof s.key == "string" && s.key && (e[s.key] = s.value);
      this.resJsonData(e);
    } catch (t) {
      console.error(t), this.resJsonErr(t.message || "Failed to get configs");
    }
  }
};
class re {
  constructor(t) {
    this.errors = [], this.md = t;
  }
  /**
   * Start the validation using values and rules passed in data
   * @param  array  data
   * @param  bool   skip To skip validations as soon as one of the rules fails+
   * @throws Error if rule method doesn't exist
   * @return bool
   */
  async validate(t, e = !1) {
    let s = !0;
    for await (const r of t) {
      const o = r.filed, n = r.id, a = r.fieldName, i = r.value;
      let c = r.rules;
      c = c.split("|");
      for await (const d of c) {
        let l = d, u = [];
        if (this.isruleHasArgs(d) ? (l = this.getRuleName(d), u = this.getRuleArgs(d)) : u = o, !(l in re.prototype))
          throw new Error("Method doesnt exists: " + l);
        if (!await this[l](i, u, n) && (this.addError(l, a, i, u), s = !1, e))
          return !1;
      }
    }
    return s;
  }
  // --- Trong file Validation.ts ---
  // async validate(validation: any, skip = false) {
  //     let passed = true;
  //     if (!Array.isArray(validation)) {
  //         throw new Error("Validation input must be an array.");
  //     }
  //     for await (const dtVal of validation) {
  //         const filed = dtVal.filed;
  //         const id = dtVal.id;
  //         const fName = dtVal.fieldName;
  //         const value = dtVal.value;
  //         let rulesArray = dtVal.rules;
  //         if (!Array.isArray(rulesArray)) {
  //             rulesArray = [];
  //         }
  //         for await (const rule of rulesArray) {
  //             if (typeof rule !== 'string') {
  //                 continue;
  //             }
  //             let method = rule;
  //             let args: any = [];
  //             if (this.isruleHasArgs(rule)) {
  //                 method = this.getRuleName(rule);
  //                 args = this.getRuleArgs(rule);
  //             } else {
  //                 args = filed;
  //             }
  //             if (!(method in Validation.prototype)) {
  //                 throw new Error("Method doesnt exists: " + method);
  //             }
  //             // @ts-expect-error: dynamic method call
  //             const vd = await this[method](value, args, id);
  //             if (!vd) {
  //                 this.addError(method, fName, value, args);
  //                 passed = false
  //                 if (skip) { return false; }
  //             }
  //         }
  //     }
  //     return passed;
  // }
  /**
   * Determine if a given rule has arguments, Ex: max(4)
   *
   * @param  string  rule
   * @return bool
   */
  isruleHasArgs(t) {
    return typeof t.split("(")[1] < "u";
  }
  /**
   * get rule name for rules that have args
   *
   * @param  string  rule
   * @return string
   */
  getRuleName(t) {
    return t.split("(")[0];
  }
  /**
   * get arguments for rules that have args
   *
   * @param  string  rule
   * @return array
   */
  getRuleArgs(t) {
    t = t.trim();
    let e = t.split("(")[1];
    return e = e.endsWith(")") ? e.slice(0, -1) : e, e.split(",");
  }
  /**
   * Add an error
   *
   * @param  string  rule
   * @param  string  placeholder for filed
   * @param  mixed   value
   * @param  array   args
   *
   */
  addError(t, e, s, r = []) {
    if (t) {
      let o = this.defaultMessages(t);
      o ? o.trim() !== "" && (s = typeof s == "string" ? s : "", o = o.replace("{placeholder}", e), o = o.replace("{value}", s), r = typeof r == "string" ? [r] : r, r.forEach((n, a) => {
        o = o.replace(`{${a}}`, n);
      }), this.errors.push(o)) : this.errors.push("The value you entered for " + e + " is invalid");
    }
  }
  /**
   * Checks if validation has passed.
   *
   * @return bool
   */
  passes() {
    return this.errors.length === 0;
  }
  /**
   * get all errors
   * @return array
   */
  getErrors() {
    return this.errors;
  }
  /**
   * clear all existing errors
   * @return bool
   */
  clearErrors() {
    this.errors = [];
  }
  /** *********************************************** **/
  /** **************    Validations    ************** **/
  /** *********************************************** **/
  /**
   * Is value not empty?
   * @param  mixed  value
   * @return bool
   */
  required(t) {
    return t == null ? !1 : !(typeof t == "string" && t.trim() === "");
  }
  /**
   * Is value not empty?
   * @param  mixed  value
   * @return bool
   */
  requiredId(t) {
    if (t == null)
      return !1;
    if (typeof t == "string") {
      if (t.trim() === "") return !1;
    } else if (typeof t == "number" && t === 0)
      return !1;
    return !0;
  }
  /**
   * min string length
   * @param  string  str
   * @param  array  args(min)
   * @return bool
   */
  minLen(t, e) {
    return t.length >= parseInt(e[0]);
  }
  equalLen(t, e) {
    return t.length === parseInt(e[0]);
  }
  // private exitData(data: any, args: any){
  //     const table = args[0];
  //     const filed = args[1];
  //     const db =  Database.openConnection();
  //     db.prepare('SELECT id FROM ' + table + ' WHERE ' + filed + ' = :data ');
  //     db.bindValue(':data',data);
  //     db.execute();
  //     const rs = db.fetchAssociative();
  //     if(rs == null){
  //         return true;
  //     }else{
  //         return false;
  //     }
  // }
  // private static async findOne(data: any, args: any) {
  //     const table = args[0];
  //     const filed = args[1];
  //     const db = mongoose.models[table] || mongoose.model(table, new mongoose.Schema({}, { strict: false }));
  //     const rs = await db.findOne({ [filed]: data });
  //     return rs ? true : false;
  // }
  /**
   * max string length
   *
   * @param  string  str
   * @param  array  args(max)
   *
   * @return bool
   */
  maxLen(t, e) {
    return t.length <= parseInt(e[0]);
  }
  /**
   * check if number between given range of numbers
   *
   * @param  int     num
   * @param  array   args(min,max)
   * @return bool
   */
  rangeNum(t, e) {
    return t >= parseInt(e[0]) && t <= parseInt(e[1]);
  }
  /**
   * check if value is a valid number
   *
   * @param  string|integer  value
   * @return bool
   */
  integer(t) {
    return !Number.isNaN(parseInt(t));
  }
  /**
   * check if value(s) is in a given array
   *
   * @param  string|array  value
   * @param  array         arr
   * @return bool
   */
  inArray(t, e) {
    if (typeof t == "object") {
      for (const s in t)
        if (!(s in e))
          return !1;
      return !0;
    }
    return t in e;
  }
  /**
   * check if value is contains alphabetic characters and numbers
   *
   * @param  mixed   value
   * @return bool
   */
  alphaNum(t) {
    return t ? /^[a-zA-Z0-9]+$/i.test(t) : !0;
  }
  /**
   * check if value is contains alphabetic characters and numbers
   *
   * @param  mixed   value
   * @return bool
   */
  number(t) {
    return typeof t == "number";
  }
  /**
   * check if value is contains alphabetic characters, numbers and spaces
   *
   * @param  mixed   value
   * @return bool
   */
  alphaNumWithSpaces(t) {
    return t ? /^[a-zA-Z0-9]+$/i.test(t) : !0;
  }
  /**
   * check if password has at least
   * - one lowercase letter
   * - one uppercase letter
   * - one number
   * - one special(non-word) character
   */
  password(t) {
    return t ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$!%^&*])[0-9a-zA-Z@#$!%^&*]{8,32}$/.test(t) : !0;
  }
  /**
   * - Phone VN
   */
  phoneVn(t) {
    return t ? /^[03|05|07|08|09]{2}[0-9]{8}/.test(t) : !0;
  }
  /**
   * check if value is equals to another value(strings)
   *
   * @param  string  value
   * @param  array   args(value)
   * @return bool
   */
  equals(t, e) {
    return t === e[0];
  }
  /**
   * check if value is not equal to another value(strings)
   *
   * @param  string  value
   * @param  array   args(value)
   * @return bool
   */
  notEqual(t, e) {
    return t !== e[0];
  }
  /**
   * check if value is a valid email
   *
   * @param  string  email
   * @return bool
   */
  email(t) {
    return t ? /^([A-Za-z0-9_\-.+]+)@([A-Za-z0-9_\-.]+)\.([A-Za-z]{2,4})$/i.test(t) : !0;
  }
  /** *********************************************** **/
  /** ************  Database Validations  *********** **/
  /** *********************************************** **/
  /**
   * check if a value of a column is unique.
   *
   * @param  string  value
   * @param  array   args(table, column, id)
   * @return bool
   */
  async unique(t, e, s) {
    try {
      const r = e[0].trim(), o = e[1].trim();
      let n = `SELECT id FROM \`${r}\` WHERE \`${o}\` = ?`;
      const a = [t];
      await this.md.isField("is_deleted", r) && (n += " AND is_deleted = 0"), s && (n += " AND id != ?", a.push(s));
      const [i] = await this.md.query(n, a);
      return i.length === 0;
    } catch (r) {
      return console.log(r), !1;
    }
  }
  // --- Trong file Validation.ts ---
  // ...
  // private async unique(value: string, args: any, id: any) {
  //     try {
  //         const actualTableName = args[0].trim();
  //         const fieldName = args[1].trim();
  //         const databaseName = process.env.MYSQL_DATABASE;
  //         if (!databaseName) {
  //             throw new Error("Biến môi trường MYSQL_DATABASE không được thiết lập.");
  //         }
  //         const checkColumnSql = `
  //         SELECT 1
  //         FROM information_schema.columns 
  //         WHERE table_schema = ? 
  //         AND table_name = ? 
  //         AND column_name = 'is_deleted'
  //     `;
  //         const [columnRows]: any = await this.pool.query(checkColumnSql, [databaseName, actualTableName]);
  //         const hasIsDeleted = columnRows.length > 0;
  //         let sql = `SELECT id FROM \`${actualTableName}\` WHERE \`${fieldName}\` = ?`;
  //         const params: any[] = [value];
  //         if (hasIsDeleted) {
  //             sql += ' AND is_deleted = 0';
  //         }
  //         if (id) {
  //             sql += ' AND id != ?';
  //             params.push(id);
  //         }
  //         const [rows]: any = await this.pool.query(sql, params);
  //         return rows.length === 0;
  //     } catch (error) {
  //         console.error("Lỗi khi kiểm tra tính duy nhất (unique):", error);
  //         return false;
  //     }
  // }
  /** *********************************************** **/
  /** ************   Default Messages     *********** **/
  /** *********************************************** **/
  defaultMessages(t) {
    return {
      required: "{placeholder} không thể trống",
      requiredId: "{placeholder} không hợp lệ",
      minLen: "{placeholder} không thể nhỏ hơn {0} ký tự",
      equalLen: "{placeholder} phải có {0} ký tự",
      phoneVn: "{placeholder} không phải thuê bao Việt Nam",
      findOne: "{placeholder} không tồn tại",
      // "exitData"   : "{placeholder} không tồn tại",
      maxLen: "{placeholder} không thể lớn hơn {0} ký tự",
      rangeNum: "{placeholder} phải nằm trong khoản từ {0} đến {1}",
      integer: "{placeholder} phải là số",
      number: "{placeholder} không hợp lệ",
      inArray: "{placeholder} không hợp lệ",
      alphaNum: "Chỉ cho phép chữ cái và số cho {placeholder}",
      alphaNumWithSpaces: "Chỉ cho phép chữ cái, số và khoảng trắng cho {placeholder}",
      password: "Vui lòng nhập mật khẩu dài 8-32 ký tự, có ký tự chữ số, chữ hoa và chữ thường, ký tự @#$!%^&*",
      equals: "{placeholder} không đúng",
      notEqual: "{placeholder} không thể bằng {0}",
      email: "Email không đúng định dạng",
      unique: "{placeholder} đã được sử dụng"
    }[t] ?? null;
  }
}
class Be {
  constructor(t) {
    this.errors = [], this.pool = t;
  }
  fieldName(t) {
    return t;
  }
  getErrors() {
    return this.errors;
  }
  async getConnection(t = null) {
    return this.conn = t || this.conn || await this.pool.getConnection(), this.conn;
  }
  // async validate(item: Partial<T>, vdObject: Record<string, any> = {}) {
  //     if (Object.entries(vdObject).length === 0) {
  //         const validation: any[] = [];
  //         for (const field in vdObject) {
  //             const rules = vdObject[field];
  //             const id = item?.id || 0;
  //             const value = item?.[field] || '';
  //             const fieldName = this.fieldName(field);
  //             Object.assign(validation, { [field]: { value, rules, fieldName, id } });
  //             validation.push({ field, value, rules, fieldName, id });
  //         }
  //         if (validation.length) {
  //             const validate = new Validation(this);
  //             await validate.validate(validation);
  //             if (validate.getErrors().length) {
  //                 this.errors = validate.getErrors();
  //                 return false;
  //             } else {
  //                 return true;
  //             }
  //         }
  //     }
  //     return true;
  // }
  async validate(t, e = {}) {
    if (Object.entries(e).length === 0)
      return !0;
    const s = [];
    for (const r in e) {
      if (!Object.prototype.hasOwnProperty.call(e, r)) continue;
      const o = e[r], n = t?.id || 0, a = t?.[r] || "", i = this.fieldName(r);
      s.push({ field: r, value: a, rules: o, fieldName: i, id: n });
    }
    if (s.length) {
      const r = new re(this);
      return await r.validate(s), r.getErrors().length ? (this.errors = r.getErrors(), !1) : !0;
    }
    return !0;
  }
  async query(t, e) {
    return this.conn ? this.conn.query(t, e) : this.pool.query(t, e);
  }
  async isField(t, e = this.table) {
    return (await this.query(`SHOW COLUMNS FROM ${e} LIKE '${t}'`)).length > 0;
  }
  async findOne(t, e = !1) {
    const s = Object.keys(t), r = Object.values(t);
    let o = `SELECT * FROM \`${this.table}\``;
    s.length && (o += ` WHERE ${s.map((a) => `\`${a}\`=?`).join(" AND ")}`), e && (o += ` ORDER BY ${e}`), o += " LIMIT 1";
    const [n] = await this.query(o, r);
    return n[0] || null;
  }
  async getById(t, e = {}) {
    return !t || t <= 0 ? null : (e.id = t, await this.findOne(e));
  }
  // async save(item: Partial<T>,) {
  //     try {
  //         if (item.id) {
  //             const fields = Object.keys(item).filter(k => k !== 'id');
  //             const values = fields.map(k => item[k]);
  //             const sql = `UPDATE \`${this.table}\` SET ${fields.map(f => `\`${f}\`=?`).join(', ')} WHERE id=?`;
  //             await this.query(sql, [...values, item.id]);
  //             return item;
  //         } else {
  //             const keys = Object.keys(item);
  //             const values = Object.values(item);
  //             const placeholders = keys.map(() => '?').join(',');
  //             // const sql = "INSERT INTO " + "`" + this.table + "`" + `(${keys.join(',')}) VALUES (${placeholders})`;
  //             const sql = `INSERT INTO \`${this.table}\` (\`${keys.join('`,`')}\`) VALUES (${placeholders})`;
  //             const [result]: any = await this.query(sql, values);
  //             item.id = result.insertId;
  //             return item;
  //         }
  //     } catch (error: any) {
  //         console.log(error.message);
  //         this.errors.push(error.message);
  //         return false;
  //     }
  // }
  async save(t) {
    try {
      if (t.id) {
        const e = { ...t };
        if (delete e.id, Object.keys(e).length === 0)
          return t;
        const s = { id: t.id };
        return await this.update(e, s), t;
      } else {
        const e = t, s = await this.insert(e);
        return t.id = s, t;
      }
    } catch (e) {
      return console.log(e.message), this.errors.push(e.message), !1;
    }
  }
  async deleteOne(t) {
    const e = Object.keys(t), s = Object.values(t), r = e.map((n) => `\`${n}\` = ?`).join(" AND "), o = `DELETE FROM \`${this.table}\` WHERE ${r}`;
    return await this.query(o, s), !0;
  }
  async deleteMany(t) {
    try {
      if (!t || Object.keys(t).length === 0)
        throw new Error("empty_filter");
      return await this.deleteOne(t), !0;
    } catch (e) {
      throw new Error(e.message || "deleteMany_failed");
    }
  }
  async vdSave(t, e = !1) {
    if (e && !await this.validate(t, e))
      throw new Error(this.errors.join(", "));
    return await this.save(t);
  }
  async findWithPagination(t = "1", e = !1, s = 1, r = 10, o, n = "*") {
    let a = "";
    o && (a = Array.isArray(o) ? o.join(" ") : o);
    const i = `
        SELECT COUNT(DISTINCT \`${this.table}\`.id) AS total
        FROM \`${this.table}\`
        ${a}
        WHERE ${t}
    `, [[{ total: c }]] = await this.query(i), d = Math.ceil(c / r), l = (s - 1) * r;
    let u = "";
    e && typeof e == "object" && (u = "ORDER BY " + Object.entries(e).map(([_, w]) => `${_} ${w}`).join(", "));
    const m = `
        SELECT ${n}
        FROM \`${this.table}\`
        ${a}
        WHERE ${t}
        ${u}
        LIMIT ? OFFSET ?
    `, [g] = await this.query(m, [r, l]);
    return {
      page: s,
      length: g.length,
      pageTotal: d,
      recordTotal: c,
      items: g
    };
  }
  async findWithPaginations(t = "1", e = !1, s = 1, r = 10, o, n = "*", a) {
    let i = "";
    o && (i = Array.isArray(o) ? o.join(" ") : o);
    let c = "";
    a && (c = "GROUP BY " + a);
    const d = `
    SELECT COUNT(*) AS total FROM (
        SELECT ${this.table}.id 
        FROM \`${this.table}\`
        ${i}
        WHERE ${t}
        ${c}
    ) AS count_query
`, [[{ total: l }]] = await this.query(d), u = Math.ceil(l / r), m = (s - 1) * r;
    let g = "";
    e && typeof e == "object" && (g = "ORDER BY " + Object.entries(e).map(([E, D]) => `${E} ${D}`).join(", "));
    const I = `
    SELECT ${n}
    FROM \`${this.table}\`
    ${i}
    WHERE ${t}
    ${c} 
    ${g}
    LIMIT ? OFFSET ?
`, [_] = await this.query(I, [r, m]);
    return {
      page: s,
      length: _.length,
      pageTotal: u,
      recordTotal: l,
      items: _
    };
  }
  async find(t = "1", e = !1, s = 10, r, o = "*") {
    let n = "";
    r && (n = Array.isArray(r) ? r.join(" ") : r);
    let a = "";
    e && typeof e == "object" && (a = "ORDER BY " + Object.entries(e).map(([m, g]) => `${m} ${g}`).join(", "));
    let i = `
        SELECT ${o}
        FROM \`${this.table}\`
        ${n}
        WHERE ${t}
        ${a}
    `;
    const c = [];
    let d = "";
    typeof s == "number" && s > 0 && (d = "LIMIT ?", c.push(s)), i += d;
    const [l] = await this.query(i, c);
    return l;
  }
  async insert(t) {
    const e = Object.keys(t), s = Object.values(t), r = Array(e.length).fill("?").join(", "), o = `INSERT INTO \`${this.table}\` (\`${e.join("`, `")}\`) VALUES (${r})`, [n] = await this.query(o, s);
    return n.insertId;
  }
  async update(t, e) {
    const s = Object.keys(t), r = Object.keys(e);
    if (s.length === 0)
      return 0;
    if (r.length === 0)
      throw new Error("Điều kiện lọc (filter) không được rỗng.");
    const o = Object.values(t), n = s.map((u) => `\`${u}\`=?`).join(", "), a = Object.values(e), i = r.map((u) => `\`${u}\`=?`).join(" AND "), c = [...o, ...a], d = `
        UPDATE \`${this.table}\` 
        SET ${n} 
        WHERE ${i}
    `, [l] = await this.query(d, c);
    return l.affectedRows;
  }
  // protected async update(data: Record<string, any>, filter: Record<string, any>): Promise<number> {
  //     if (Object.keys(data).length === 0) {
  //         return 0;
  //     }
  //     if (Object.keys(filter).length === 0) {
  //         throw new Error("Điều kiện lọc (filter) không được rỗng.");
  //     }
  //     const query = knex(this.table) 
  //         .where(filter) 
  //         .update(data);
  //     const sql = query.toString();
  //     const [result]: any = await this.query(sql, query.bindings); 
  //     return result.affectedRows; 
  // }
}
class T extends Be {
  async getDatas(t, e, s) {
    const r = {}, o = await this.findWithPagination(r);
    return {
      page: o.page,
      pageLen: o.length,
      pageTotal: o.pageTotal,
      recordTotal: o.recordTotal,
      data: o.items
    };
  }
}
class De extends T {
  constructor() {
    super(...arguments), this.vdObject = {
      dcode: "maxLen(30)",
      // qhns: 'maxLen(13)',
      name: "required|maxLen(150)",
      description: "maxLen(255)",
      lat: "maxLen(30)",
      lng: "maxLen(30)"
    }, this.validateImport = {
      dcode: "maxLen(30)",
      // qhns: 'maxLen(13)',
      name: "required|maxLen(150)",
      description: "maxLen(255)",
      lat: "maxLen(30)",
      lng: "maxLen(30)"
    };
  }
  fieldName(t) {
    return {
      dcode: "Mã đơn vị",
      qhns: "Mã quan hệ ngân sách",
      locationid: "Vị trí",
      name: "Tên đơn vị",
      nameSearch: "Tên (tìm kiếm)",
      description: "Mô tả",
      address: "Địa chỉ",
      lat: "Vĩ độ",
      lng: "Kinh độ",
      status: "Trạng thái"
    }[t] ?? t;
  }
  // static async getDataExport(request: Request, user: any, is_deleted: any) {
  //     let params: any = {};
  //     let nameSh = request.get('nameSh');
  //     if (nameSh) {
  //         let keyword = Common.removeVietnameseTones(nameSh);
  //         params.nameSearch = { $regex: keyword };
  //     }
  //     let dcodeSh = request.get('dcodeSh');
  //     if (dcodeSh) {
  //         params.dcode = { $regex: '^' + dcodeSh, $options: 'i' };
  //     }
  //     if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
  //         params.is_deleted = 0;
  //     }
  //     let data = await this.findItems(params, false, false, false, 10000);
  //     return data;
  // }
  async getDatas(t, e, s) {
    const r = [], o = t.get("nameSh");
    if (o) {
      const l = `%${o}%`;
      r.push(`(fullname LIKE '${l}' OR username LIKE '${l}')`);
    }
    t.get("dcodeSh") && r.push("status = ?");
    const a = r.length > 0 ? r.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), d = await this.findWithPagination(
      a,
      { created_at: "DESC" },
      i,
      c
    );
    return {
      page: d.page,
      pageLen: d.length,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
}
class le extends j {
  constructor() {
    super(...arguments), this.md = De, this.actionActive = ["create", "edit", "detail", "delete", "deleteone", "import", "export", "copy"], this.is_deleted = !0, this.exportFile = "depts.xlsx";
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.nameSearch = M.removeVietnameseTones(t.name ?? ""), t.dcode = this.request.getPost("dcode"), t.locationid = this.request.getPost("locationid"), t.description = this.request.getPost("description"), t.address = this.request.getPost("address"), t.lat = this.request.getPost("lat"), t.lng = this.request.getPost("lng"), t.status = this.request.getPost("status", 0, "int"), t;
  }
  async getDepts() {
  }
  async importBefore(t, e, s) {
    if (s.name = t.getFilterData("B" + e), s.nameSearch = M.removeVietnameseTones(s.name ?? ""), s.dcode = t.getFilterData("C" + e), s.address = t.getFilterData("D" + e), s.description = t.getFilterData("E" + e), s.status = t.getFilterData("F" + e), s?._id)
      s.updated_at = /* @__PURE__ */ new Date(), s.updated_by = this.userObjectId;
    else {
      const r = /* @__PURE__ */ new Date();
      s.created_at = r, s.updated_at = r, s.created_by = this.userObjectId, s.updated_by = this.userObjectId;
    }
    return s;
  }
  // async exportBefore(workbook: Workbook | undefined) {
  //     const worksheet = workbook?.getWorksheet(1);
  //     const data = await this.md.getDataExport(this.request, this.user, this.is_deleted);
  //     data.forEach((item: any, ind: any) => {
  //         worksheet?.spliceRows(this.importRow + ind, 0, [item.id, item.name, item.dcode, item.address, item.description, item.status, item.created_by?.fullname ?? '']);
  //     });
  //     return workbook;
  // }
  // async exportBefore(workbook: Workbook | undefined) {
  //     // const ws = workbook?.getWorksheet(1);
  //     // if (!ws) return workbook;
  //     // const data = await this.md.getDataExport(this.request, this.user, this.is_deleted);
  //     // const startRow = this.importRow || 6;
  //     // data.forEach((item: any, i: number) => {
  //     //     const row = startRow + i;
  //     //     ws.getCell(`A${row}`).value = item.id;
  //     //     ws.getCell(`B${row}`).value = item.name;
  //     //     ws.getCell(`C${row}`).value = item.dcode;
  //     //     ws.getCell(`D${row}`).value = item.address;
  //     //     ws.getCell(`E${row}`).value = item.description;
  //     //     ws.getCell(`F${row}`).value = item.status;
  //     //     ws.getCell(`G${row}`).value = item.created_by?.fullname ?? '';
  //     // });
  //     // return workbook;
  // }
}
class je extends Jt {
  async serve() {
    try {
      const { folder: t, id: e, filename: s } = this.req.params, r = J.join(J.resolve(), "uploads", t, String(e), s);
      if (!K.existsSync(r))
        throw new Error("invalid_file");
      const o = J.extname(s).toLowerCase(), n = K.statSync(r), a = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".pdf": "application/pdf"
      };
      return a[o] ? (this.res.type(a[o]).header("Content-Length", n.size), this.res.send(K.createReadStream(r))) : (this.res.header("Content-Disposition", `attachment; filename="${s}"`).header("Content-Length", n.size).type("application/octet-stream"), this.res.send(K.createReadStream(r)));
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class Fe extends j {
  constructor() {
    super(...arguments), this.md = this.models.logs, this.actionActive = ["detail", "create", "edit", "delete", "deleteone", "import", "export", "copy"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    return t.typeid = this.request.getPost("typeid"), t.name = this.request.getPost("name"), t.nameSearch = M.removeVietnameseTones(t.name ?? ""), t.controller = this.request.getPost("controller"), t.action = this.request.getPost("action"), t.itemid = this.request.getPost("itemid"), t.table = this.request.getPost("table"), t.difference = this.request.getPost("difference"), t.params = this.request.getPost("params"), t.item = this.request.getPost("item"), t.ip = this.request.getPost("ip"), t.device = this.request.getPost("device"), t.browser = this.request.getPost("browser"), t.os = this.request.getPost("os"), t.userid = Number(this.request.getPost("userid")), t;
  }
}
class Ve extends j {
  constructor() {
    super(...arguments), this.md = this.models.menuType, this.actionActive = ["detail"], this.isDeleted = !0, this.isImage = !0;
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.status = this.request.getPost("status"), t;
  }
}
let ue = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.menu, this.actionActive = ["create", "edit", "detail", "deleteone"], this.isDeleted = !0, this.isImage = !0;
  }
  async updateBefore(t, e) {
    if (t.name = this.request.getPost("name"), t.icon = this.request.getPost("icon"), t.menu_type = this.request.getPost("menu_type"), t.menu_type) {
      const r = await this.md.getById(t.menu_type);
      if (!r)
        throw new Error("invaild_menutype");
      t.menu_type = r?.id;
    }
    t.status = this.request.getPost("status"), t.icon = this.request.getPost("icon"), t.is_mega = this.request.getPost("is_mega");
    const s = this.request.getPost("type");
    if (t.type = s, t.parent_id = this.request.getPost("parent_id", 0, "int"), t.parent_id) {
      if (t.parent_id === t?.id) throw new Error("invalid_parent");
      const r = await this.md.getById(t.parent_id, { isdeleted: 0 });
      if (!r) throw new Error("invalid_parent");
      if (r.level >= 3)
        throw new Error("max_level_exceeded");
      if (typeof t.id != "number" || t.id <= 0)
        throw new Error("invalid_item_id");
      if ((await this.md.getSubIds(t.id)).includes(t.parent_id))
        throw new Error("invalid_parent");
    }
    return t;
  }
  async getFuncMenu(t, e = 0) {
    try {
      t = this.request.get("menu_type"), e = this.request.get("parent_id") || 0;
      const s = parseInt(t, 10);
      if (isNaN(s) || s <= 0)
        throw new Error("invalid_menutype");
      const r = parseInt(e, 10);
      if (r > 0 && !await this.md.findOne({
        id: r,
        menutype: s
      }))
        throw new Error("invalid_404");
      const o = await this.md.getMenuTree(r, s);
      this.resJsonData(o);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
}, Vt = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.news, this.actionActive = ["create", "copy", "detail", "edit", "delete", "deleteone"], this.isDeleted = !0, this.exportFile = "news_export.xlsx";
  }
  async updateBefore(t, e) {
    if (t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.content = this.request.getPost("content", "", "html"), t.category_ids = this.request.getPost("category_ids"), !t.category_ids) throw new Error("invail_category");
    const s = await this.md.getById(t.category_ids);
    return t.category_ids && (t.category_ids = s?.id), t.status = this.request.getPost("status"), t.meta_title = t?.id ? this.request.getPost("meta_title") : t.name, t.meta_description = t?.id ? this.request.getPost("meta_description") : t.description, t.meta_keywords = t?.id ? this.request.getPost("metaKeymeta_keywordswords") : t.name, t.alias = t?.id ? this.request.getPost("alias") : await M.createAlias(t, this.md), t.hot = this.request.getPost("hot", 0, "int"), t;
  }
  async detailByAlias(t) {
    try {
      if (t = this.request.get("alias"), !this.actionActive.includes("detail"))
        throw new Error("invalid_403");
      const e = { alias: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (console.log(s), !s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async importBefore(t, e, s) {
    if (s.name = t.getFilterData("B" + e), s.excerpt = t.getFilterData("C" + e), s.status = t.getFilterData("D" + e), s.newsCategoryId = t.getFilterData("E" + e), s.newsCategoryId) {
      const r = await this.md.getById(s.newsCategoryId);
      s.newsCategory = r?._id ?? null;
    }
    if (s.isFeatured = t.getFilterData("F" + e), s?._id)
      s.metaTitle = s.metaTitle ?? t.getFilterData("G" + e), s.metaExcerpt = s.metaExcerpt ?? t.getFilterData("H" + e), s.metaKeywords = s.metaKeywords ?? t.getFilterData("J" + e), s.alias = s.alias ?? t.getFilterData("I" + e), s.updatedAt = /* @__PURE__ */ new Date(), s.updatedBy = this.userObjectId;
    else {
      s.metaTitle = t.getFilterData("B" + e), s.metaExcerpt = t.getFilterData("C" + e), s.metaKeywords = t.getFilterData("B" + e), s.alias = await M.createAlias(s, this.md);
      const r = /* @__PURE__ */ new Date();
      s.created_at = r, s.updated_at = r, s.publish_at = r, s.created_by = this.userObjectId, s.updated_by = this.userObjectId;
    }
    return s;
  }
  // async exportBefore(workbook: Workbook | undefined) {
  //     // const worksheet = workbook?.getWorksheet(1);
  //     // const data = await this.md.getDataExport(this.request, this.user, this.isDeleted);
  //     // data.forEach((item: any, ind: any) => {
  //     //     worksheet?.spliceRows(this.importRow + ind, 0, [item.numberId, item.name, item.excerpt, item.status,
  //     //     item.newsCategoryId ?? '', item.isFeatured, item.metaTitle, item.metaExcerpt, item.metaKeywords, item.alias, item.newsCategory?.name ?? '', item.createdBy?.fullname ?? '']);
  //     // });
  //     // return workbook;
  // }
  async getParentSimple() {
    try {
      const t = await this.models.newsCategory.getTree({ is_deleted: 0 });
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Đã xảy ra lỗi");
    }
  }
  async listNamesNews() {
    try {
      const s = await this.md.find(
        "isdeleted = 0",
        { sort_order: "ASC" },
        !1,
        void 0,
        "id, name"
      );
      return this.resJsonData(s);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
}, he = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.newsCategory, this.actionActive = ["create", "detail", "copy", "edit", "delete", "deleteone"], this.isDeleted = !0;
  }
  async updateBefore(t, e) {
    if (t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.layout = this.request.getPost("layout"), t.status = this.request.getPost("status"), t.parent_id = this.request.getPost("parent_id", 0, "int"), t.alias = await M.createAlias(t, this.md), t.meta_title = t.id ? this.request.getPost("meta_title") : t.name, t.meta_description = t.id ? this.request.getPost("meta_description") : t.meta_description, t.meta_keywords = t.id ? this.request.getPost("meta_keywords") : t.name, t.parent_id) {
      if (t.parent_id === t?.id) throw new Error("invalid_parent");
      const s = await this.md.getById(t.parent_id, { isdeleted: 0 });
      if (!s) throw new Error("invalid_parent");
      if (s.level >= 3)
        throw new Error("max_level_exceeded");
      if (!t.id) throw new Error("invail_childIds");
      if ((await this.md.getSubIds(t.id)).includes(t.parent_id))
        throw new Error("invalid_parent");
    }
    return t;
  }
  async getTree() {
    try {
      const t = this.request.get("parent_id"), e = {
        status: 1
      };
      this.is_deleted && (e.is_deleted = 0);
      const s = await this.md.getTree(e, t);
      this.resJsonData(s);
    } catch (t) {
      this.resJsonErr(t.message || "Đã xảy ra lỗi");
    }
  }
}, We = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.banners, this.actionActive = ["create", "edit", "detail", "delete", "deleteone"], this.isDeleted = !0;
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.excerpt = this.request.getPost("excerpt"), t.image = M.rmStaticPath(this.request.getPost("image")), t.status = this.request.getPost("status"), t.description = this.request.getPost("description"), t.buttonName = this.request.getPost("buttonName"), t.buttonLink = this.request.getPost("buttonLink"), t.saleName = this.request.getPost("saleName"), t.saleValue = this.request.getPost("saleValue"), t;
  }
}, Ke = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.products, this.actionActive = ["create", "copy", "detail", "edit", "delete", "deleteone"], this.isDeleted = !0, this.exportFile = "news_export.xlsx";
  }
  async updateBefore(t, e) {
    t.name = this.request.getPost("name"), t.excerpt = this.request.getPost("excerpt"), t.description = this.request.getPost("description"), t.content = this.request.getPost("content", "", "html"), t.detail_info = this.request.getPost("detail_info", "", "html"), t.code = this.request.getPost("code"), t.package_id = this.request.getPost("package_id", 0, "int"), t.hot = this.request.getPost("hot", 0, "int"), t.status = this.request.getPost("status", 0, "int");
    const s = this.request.getPost("category_ids");
    return t.category_ids = s, t.meta_title = t?.id ? this.request.getPost("meta_title") : t.name, t.meta_description = t?.id ? this.request.getPost("meta_description") : t.description, t.meta_keywords = t?.id ? this.request.getPost("meta_keywords") : t.name, t.alias = t?.id ? this.request.getPost("alias") : await M.createAlias(t, this.md), t;
  }
};
class Z extends j {
  constructor() {
    super(...arguments), this.md = this.models.pages, this.actionActive = ["create", "import", "export", "copy", "detail", "edit", "delete", "deleteone"], this.isDeleted = !0, this.isImage = !0;
  }
  async updateBefore(t, e) {
    return t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.status = this.request.getPost("status"), t.is_home = this.request.getPost("is_home"), t.is_login = this.request.getPost("is_login"), t.temp_id = this.request.getPost("temp_id"), t.store_id = this.request.getPost("store_id"), t.params = this.request.getPost("params"), t.meta_title = t?.id ? this.request.getPost("meta_title") : t.name, t.meta_description = t?.id ? this.request.getPost("meta_description") : t.description, t.meta_keywords = t?.id ? this.request.getPost("meta_keywords") : t.name, t.alias = t?.id ? this.request.getPost("alias") : await M.createAlias(t, this.md), t;
  }
  async addNewSection(t = 0) {
    try {
      const e = {};
      if (e.id = t, !t) throw new Error("invalid_id");
      this.is_deleted && (e.is_deleted = 0);
      const s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      const r = this.request.get("quanRow"), o = {
        quanRow: r,
        idName: "",
        className: "",
        image: "",
        container: "",
        data: []
      };
      return r.split("-").forEach((a) => {
        o.data.push({
          col: a,
          data: []
        });
      }), s.content.push(o), await this.md.vdSave(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    } finally {
    }
  }
  async editSection(t = 0) {
    let e = !1;
    const s = !1;
    try {
      const r = {};
      if (r.numberId = t, !t) throw new Error("invalid_id");
      this.isDeleted && (r.isDeleted = 0);
      const o = this.request.get("sId", "-1", "int"), n = await this.md.findOne(r);
      if (!t) throw new Error("invalid_id");
      if (!n) throw new Error("invalid_404");
      if (!Array.isArray(n.content) || !n.content[o])
        throw new Error("invalid_section");
      const a = n.content[o], i = this.request.getPost("quanRow");
      i && (a.quanRow = i, a.data = i.split("-").map((d) => ({ col: d, data: [] }))), a.idName = this.request.getPost("idName") || a.idName, a.className = this.request.getPost("className") || a.className, a.image = this.request.getPost("image") || a.image;
      const c = this.request.getPost("imageOld");
      return (s && a.image || c !== a.image) && (e = a.image), a.image = s || (c == a.image ? c : ""), e && rt.removeFile(e), a.container = this.request.getPost("container") || a.container, await this.md.vdSave(n, this.md.vdObject), this.resJsonData(n);
    } catch (r) {
      return this.resJsonErr(r.message);
    } finally {
    }
  }
  async deleteSection(t = 0) {
    try {
      const e = {};
      if (e.numberId = t, !t) throw new Error("invalid_id");
      this.is_deleted && (e.is_deleted = 0);
      const s = this.request.get("sId", "-1", "int"), r = await this.md.findOne(e);
      if (!r) throw new Error("invalid_404");
      if (!Array.isArray(r.content) || !r.content[s])
        throw new Error("invalid_section");
      return r.content.splice(s, 1), await this.md.vdSave(r, this.md.vdObject), this.resJsonData(r);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async addNewCol(t = 0) {
    try {
      const e = {};
      if (e.numberId = t, !t) throw new Error("invalid_id");
      this.is_deleted && (e.is_deleted = 0);
      const s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      const r = this.request.get("sId", "-1", "int"), o = this.request.get("rId", "-1", "int"), n = this.request.get("quanCol");
      if (!Array.isArray(s.content) || !s.content[r])
        throw new Error("invalid_section");
      const a = s.content[r];
      if (!Array.isArray(a.data) || !a.data[o])
        throw new Error("invalid_row");
      const i = a.data[o];
      i.data || (i.data = []);
      const d = n.split("-").map((l) => ({
        col: l,
        name: "",
        link: "",
        des: "",
        type: "custom",
        options: {
          content: ""
        },
        intervale: "",
        idName: "",
        className: ""
      }));
      return i.data.push(...d), await this.md.vdSave(s, this.md.vdObject), this.resJsonData(s);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async editCol(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { numberId: t };
      this.is_deleted && (e.is_deleted = 0);
      const s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      const r = this.request.get("sId", "-1", "int"), o = this.request.get("rId", "-1", "int"), n = this.request.get("cId", "-1", "int");
      if (!Array.isArray(s.content) || !s.content[r])
        throw new Error("invalid_section");
      const a = s.content[r];
      if (!Array.isArray(a.data) || !a.data[o])
        throw new Error("invalid_row");
      const i = a.data[o];
      if (!Array.isArray(i.data) || !i.data[n])
        throw new Error("invalid_col");
      const c = i.data[n], d = this.request.getPost("type");
      if (d && d !== c.type)
        switch (c.type = d, d) {
          case "newshot":
            c.options = {
              newsCategoryId: [],
              news: [],
              limit: 10,
              order: "desc",
              layout: ""
            };
            break;
          case "custom":
            c.options = {
              content: ""
            };
            break;
          default:
            break;
        }
      else
        c.options = c.options || {};
      if (c.type === "newshot") {
        const l = this.request.getPost("newsCategoryId", [], "ids"), u = this.request.getPost("news", [], "ids");
        c.options.newsCategoryId = l, c.options.news = u, c.options.limit = this.request.getPost("limit") ?? c.options.limit, c.options.order = this.request.getPost("order") ?? c.options.order, c.options.layout = this.request.getPost("layout") ?? c.options.layout;
      } else c.type === "custom" && (c.options.content = this.request.getPost("content") ?? c.options.content);
      return c.col = this.request.getPost("col") ?? c.col, c.name = this.request.getPost("name") ?? c.name, c.link = this.request.getPost("link") ?? c.link, c.des = this.request.getPost("des") ?? c.des, c.intervale = this.request.getPost("intervale") ?? c.intervale, c.idName = this.request.getPost("idName") ?? c.idName, c.className = this.request.getPost("className") ?? c.className, await this.md.vdSave(s, this.md.vdObject), this.resJsonData(s);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async deleteCol(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { numberId: t };
      this.is_deleted && (e.is_deleted = 0);
      const s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      const r = this.request.get("sId", "-1", "int"), o = this.request.get("rId", "-1", "int"), n = this.request.get("cId", "-1", "int");
      if (!Array.isArray(s.content) || !s.content[r])
        throw new Error("invalid_section");
      const a = s.content[r];
      if (!Array.isArray(a.data) || !a.data[o])
        throw new Error("invalid_row");
      const i = a.data[o];
      if (!Array.isArray(i.data) || !i.data[n])
        throw new Error("invalid_col");
      return i.data.splice(n, 1), await this.md.vdSave(s, this.md.vdObject), this.resJsonData(s);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async sortCol(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = this.request.get("sId", "-1", "int"), s = this.request.get("rId", "-1", "int"), r = this.request.get("dataSort") || "[]", o = JSON.parse(r), n = { numberId: t };
      this.isDeleted && (n.isDeleted = 0);
      const a = await this.md.findOne(n);
      if (!a) throw new Error("invalid_404");
      if (!Array.isArray(a.content) || !a.content[e])
        throw new Error("invalid_section");
      const i = a.content[e];
      if (!Array.isArray(i.data) || !i.data[s])
        throw new Error("invalid_row");
      const c = i.data[s];
      if (!Array.isArray(c.data))
        throw new Error("invalid_columns");
      const d = [];
      if (o.forEach((l) => {
        if (typeof l != "number" || l < 0 || l >= c.data.length)
          throw new Error(`invalid_sort_index_${l}`);
        d.push(c.data[l]);
      }), d.length !== c.data.length)
        throw new Error("invalid_sort_data");
      return c.data = d, await this.md.vdSave(a, this.md.vdObject), this.resJsonData(a);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async sortRow(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = this.request.get("sId", "-1", "int"), s = this.request.get("dataSort") || "[]";
      let r = [];
      try {
        r = JSON.parse(s);
      } catch (d) {
        throw new Error("invalid_dataSort");
      }
      const o = { numberId: t };
      this.isDeleted && (o.isDeleted = 0);
      const n = await this.md.findOne(o);
      if (!n) throw new Error("invalid_404");
      if (!Array.isArray(n.content) || !n.content[e])
        throw new Error("invalid_section");
      const a = n.content[e];
      if (!Array.isArray(a.data))
        throw new Error("invalid_rows");
      const i = a.data, c = [];
      if (r.length !== i.length)
        throw new Error("invalid_sort_data");
      if (r.forEach((d) => {
        if (typeof d != "number" || d < 0 || d >= i.length)
          throw new Error(`invalid_sort_index_${d}`);
        c.push(i[d]);
      }), c.length !== i.length)
        throw new Error("invalid_sort_data");
      return a.data = c, await this.md.vdSave(n, this.md.vdObject), this.resJsonData(n);
    } catch (e) {
      return this.resJsonErr(e.message);
    } finally {
    }
  }
  async sortSection(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = this.request.get("dataSort");
      if (!e) throw new Error("invalid_sort");
      let s;
      try {
        s = JSON.parse(e);
      } catch (a) {
        throw new Error("invalid_sort_format");
      }
      const r = await this.md.findOne({ numberId: t, isDeleted: 0 });
      if (!r) throw new Error("invalid_404");
      const o = r.content || [];
      if (!Array.isArray(o)) throw new Error("invalid_content");
      if (s.length !== o.length)
        throw new Error("invalid_sort_data");
      const n = [];
      if (s.forEach((a) => {
        if (typeof a != "number" || a < 0 || a >= o.length)
          throw new Error(`invalid_sort_index_${a}`);
        n.push(o[a]);
      }), n.length !== o.length)
        throw new Error("invalid_sort_data");
      return r.content = n, await this.md.vdSave(r, this.md.vdObject), this.resJsonData(r);
    } catch (e) {
      return this.resJsonErr(e.message);
    }
  }
}
let Ue = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.categories, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    t.name = this.request.getPost("name"), t.alias = this.request.getPost("alias"), t.description = this.request.getPost("description"), t.image = this.request.getPost("image"), t.sort_order = this.request.getPost("sort_order", 0), t.status = this.request.getPost("status"), t.layout = this.request.getPost("layout"), t.parent_id = this.request.getPost("parent_id", 0), t.meta_title = t?.id ? this.request.getPost("meta_title") : t.name, t.meta_description = t?.id ? this.request.getPost("meta_description") : t.description, t.meta_keywords = t?.id ? this.request.getPost("metaKeymeta_keywordswords") : t.name, t.alias = t?.id ? this.request.getPost("alias") : await M.createAlias(t, this.md);
    const s = Number(t.parent_id) || 0;
    if (s > 0) {
      const r = await this.md.getById(s);
      if (!r)
        throw new Error("Danh mục cha không hợp lệ (invalid_parent_category).");
      if (t.parent_id = r.id, t.level = (r.level || 0) + 1, t.id && t.id === t.parent_id)
        throw new Error("Không thể chọn chính danh mục này làm danh mục cha.");
    } else
      t.parent_id = 0, t.level = 1;
    return t;
  }
}, Ge = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.packages, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    t.name = this.request.getPost("name"), t.short_name = this.request.getPost("short_name"), t.excerpt = this.request.getPost("excerpt"), t.image = this.request.getPost("image"), t.status = this.request.getPost("status", 1), t.layout = this.request.getPost("layout");
    const s = this.request.getPost("alias");
    return t.id ? t.alias = s ?? e.alias : t.alias = s ?? await M.createAlias(t.name, this.md), t.id && (t.short_name = this.request.hasPost("short_name") ? t.short_name : e.short_name, t.excerpt = this.request.hasPost("excerpt") ? t.excerpt : e.excerpt, t.image = this.request.hasPost("image") ? t.image : e.image), t;
  }
}, He = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.productPrice, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !1;
  }
  async updateBefore(t, e) {
    if (t.price = this.request.getPost("price"), t.is_dist = this.request.getPost("is_dist", 0), t.quantity = this.request.getPost("quantity", -1), t.id) {
      const s = Number(t.quantity), r = Number(e.quantity), o = Number(e.remaining_quantity);
      if (s !== r && s >= 0) {
        const n = s - r;
        t.remaining_quantity = o + n;
      } else
        t.remaining_quantity = o, t.quantity = r;
      t.sold_quantity = e.sold_quantity, t.product_id = e.product_id, t.package_id = e.package_id;
    } else {
      if (t.product_id = this.request.getPost("product_id"), t.package_id = this.request.getPost("package_id"), !t.product_id)
        throw new Error("product_id không được để trống.");
      t.sold_quantity = 0;
      const s = Number(t.quantity);
      s >= 0 ? t.remaining_quantity = s : t.remaining_quantity = -1;
    }
    return t.price !== void 0 && (t.price = Math.max(0, Number(t.price))), t;
  }
}, Ye = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.productReviews, this.actionActive = ["index", "detail", "edit", "delete", "deleteone"];
  }
  // Loại bỏ 'create' vì đánh giá thường tạo qua đơn hàng
  async updateBefore(t, e) {
    if (t.id) {
      const s = this.request.getPost("status");
      s !== void 0 ? t.status = Number(s) : t.status = e.status, t.des = this.request.getPost("des") ?? e.des, t.point = this.request.getPost("point") ?? e.point, t.images = this.request.getPost("images") ?? e.images;
    } else {
      if (t.store_id = this.request.getPost("store_id"), t.customer_id = this.request.getPost("customer_id"), t.order_id = this.request.getPost("order_id"), t.product_id = this.request.getPost("product_id"), t.point = this.request.getPost("point"), t.des = this.request.getPost("des"), !t.store_id || !t.customer_id || !t.product_id)
        throw new Error("Thông tin cơ bản về đánh giá không đầy đủ.");
      t.fullname = this.request.getPost("fullname") || "Ẩn danh", t.status = this.request.getPost("status", 1);
    }
    return t.point !== void 0 && (t.point = Math.min(5, Math.max(0, Number(t.point)))), t;
  }
}, Qe = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.voucher, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    if (t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.image = this.request.getPost("image"), t.code = this.request.getPost("code"), t.voucher_type = this.request.getPost("voucher_type"), t.discount_type = this.request.getPost("discount_type"), t.discount = this.request.getPost("discount"), t.min_cost = this.request.getPost("min_cost", 0), t.cost_limit = this.request.getPost("cost_limit", 0), t.quantity = this.request.getPost("quantity", -1), t.customer_number = this.request.getPost("customer_number", -1), t.tier_id = this.request.getPost("tier_id"), t.status = this.request.getPost("status", 1), t.id)
      t.code = e.code, t.quantity_used = e.quantity_used, t.discount_type = e.discount_type;
    else {
      if (!t.name || !t.code || !t.voucher_type || !t.discount)
        throw new Error("Tên, Mã, Loại Voucher và Chiết khấu là bắt buộc.");
      t.quantity_used = 0, t.used = 0;
    }
    if (t.date_type = this.request.getPost("date_type"), t.start_date = this.request.getPost("start_date"), t.end_date = this.request.getPost("end_date"), t.start_time = this.request.getPost("start_time"), t.end_time = this.request.getPost("end_time"), t.day_of_week = this.request.getPost("day_of_week"), t.date_type === 1 && (!t.start_date || !t.end_date))
      throw new Error("Cần cung cấp ngày bắt đầu và ngày kết thúc.");
    return t.discount = Math.max(0, Number(t.discount)), t.min_cost = Math.max(0, Number(t.min_cost)), t.cost_limit = Math.max(0, Number(t.cost_limit)), t;
  }
}, ze = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.promotions, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    const s = this.request.getUserId();
    t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.image = this.request.getPost("image"), t.status = this.request.getPost("status", 1), t.store_id = this.request.getPost("store_id", 0), t.date_type = this.request.getPost("date_type"), t.start_date = this.request.getPost("start_date"), t.end_date = this.request.getPost("end_date"), t.start_time = this.request.getPost("start_time"), t.end_time = this.request.getPost("end_time"), t.day_of_week = this.request.getPost("day_of_week"), t.nofi_type = this.request.getPost("nofi_type"), t.flash_type = this.request.getPost("flash_type");
    const r = this.request.getPost("alias");
    if (r ? t.alias = r : t?.id || (t.alias = await M.createAlias(t.name, this.md)), t.id || (t.created_by = s, t.is_deleted = 0), t.updated_by = s, t.start_date && t.end_date && t.start_date > t.end_date)
      throw new Error("Ngày bắt đầu không được lớn hơn ngày kết thúc.");
    return t;
  }
}, Xe = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.voucherStore, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    const s = this.request.getUserId();
    if (t.store_id = this.request.getPost("store_id"), t.name = this.request.getPost("name"), t.description = this.request.getPost("description"), t.image = this.request.getPost("image"), t.tier_id = this.request.getPost("tier_id", 0), t.voucher_type = this.request.getPost("voucher_type"), t.discount_type = this.request.getPost("discount_type"), t.discount = this.request.getPost("discount", 0), t.min_cost = this.request.getPost("min_cost", 0), t.cost_limit = this.request.getPost("cost_limit", 0), t.quantity = this.request.getPost("quantity", 0), t.customer_number = this.request.getPost("customer_number", 0), t.date_type = this.request.getPost("date_type"), t.start_date = this.request.getPost("start_date"), t.end_date = this.request.getPost("end_date"), t.start_time = this.request.getPost("start_time"), t.end_time = this.request.getPost("end_time"), t.day_of_week = this.request.getPost("day_of_week"), t.status = this.request.getPost("status", 1), t.reason_cancel = this.request.getPost("reason_cancel"), t.code = this.request.getPost("code"), !t.id && !t.code && (t.code = M.randomText(6)), t.start_date && t.end_date && t.start_date > t.end_date)
      throw new Error("Ngày bắt đầu không được lớn hơn ngày kết thúc.");
    return t.id ? (t.quantity_used = e.quantity_used, t.used = e.used) : (t.created_by = s, t.is_deleted = 0, t.quantity_used = 0, t.used = 0), t.updated_by = s, t;
  }
}, Ze = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.voucherStoreCustomer, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !1;
  }
  async updateBefore(t, e) {
    t.customer_id = this.request.getPost("customer_id"), t.voucher_id = this.request.getPost("voucher_id"), t.voucher_value = this.request.getPost("voucher_value", 0), t.voucher_info = this.request.getPost("voucher_info"), t.order_id = this.request.getPost("order_id");
    const s = Number(t.customer_id) || 0, r = Number(t.voucher_id) || 0;
    if (s <= 0)
      throw new Error("ID khách hàng không hợp lệ.");
    if (r <= 0)
      throw new Error("ID Voucher không hợp lệ.");
    return t;
  }
};
class ts extends j {
  constructor() {
    super(...arguments), this.md = this.models.voucherInvited, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !1;
  }
  async updateBefore(t) {
    t.customer_id = this.request.getPost("customer_id"), t.voucher_id = this.request.getPost("voucher_id"), t.quantity = this.request.getPost("quantity", 1);
    const e = Number(t.customer_id) || 0, s = Number(t.voucher_id) || 0;
    if (e <= 0)
      throw new Error("ID khách hàng không hợp lệ.");
    if (s <= 0)
      throw new Error("ID Voucher không hợp lệ.");
    return t.id, t;
  }
}
let es = class extends j {
  constructor() {
    super(...arguments), this.md = this.models.productReviewReply, this.mdReview = this.models.productReviews, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t, e) {
    const s = this.request.getUserId();
    t.content = this.request.getPost("content"), t.status = this.request.getPost("status", 1), (!t.id || this.request.getPost("product_review_id")) && (t.product_review_id = this.request.getPost("product_review_id"));
    const r = Number(t.product_review_id) || 0;
    if (r <= 0)
      throw new Error("Đánh giá sản phẩm (product_review_id) không hợp lệ.");
    const o = await this.mdReview.getById(r);
    if (!o)
      throw new Error("Đánh giá sản phẩm cha không tồn tại.");
    return t.product_review_id = o.id, t.id || (t.created_by = s), t.updated_by = s, t;
  }
};
class ss extends j {
  constructor() {
    super(...arguments), this.md = this.models.stores, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !0;
  }
  async updateBefore(t) {
    const e = this.request.getUserId();
    t.name = this.request.getPost("name"), t.des = this.request.getPost("des"), t.activity = this.request.getPost("activity"), t.phone = this.request.getPost("phone"), t.telephone = this.request.getPost("telephone"), t.image = this.request.getPost("image"), t.email = this.request.getPost("email"), t.status = this.request.getPost("status", 1), t.ctm_discount = this.request.getPost("ctm_discount", 0), t.country_id = this.request.getPost("country_id"), t.province_id = this.request.getPost("province_id"), t.district_id = this.request.getPost("district_id"), t.ward_id = this.request.getPost("ward_id"), t.address = this.request.getPost("address"), t.lat = this.request.getPost("lat"), t.lng = this.request.getPost("lng"), (!t.id || this.request.getPost("register_id")) && (t.register_id = this.request.getPost("register_id"));
    const s = this.request.getPost("alias");
    s ? t.alias = s : !t.id && t.name && (t.alias = await M.createAlias(t.name, this.md));
    const r = [
      t.address
      // wardName,
      // districtName,
      // provinceName
    ].filter((o) => o);
    return t.fulladdress = r.join(", "), t.id || (t.created_by = e, t.is_deleted = 0, t.review_total = 0, t.review_point = 0), t.updated_by = e, t;
  }
}
const rs = () => {
  const h = process.env.ADMIN_URI || "/adcp", t = new $t();
  return t.add(h, [
    //00.Ganeral
    //01.Tài khoản
    {
      link: "/captcha",
      modules: "admins",
      controller: st,
      action: "getCaptcha"
    },
    {
      link: "/uploads/:folder/:id/:filename",
      modules: "admins",
      controller: je,
      action: "serve"
    },
    {
      link: "/login",
      modules: "admins",
      controller: st,
      action: "login",
      method: "post"
    },
    {
      link: "/redirectToGoogle",
      modules: "admins",
      controller: st,
      action: "redirectToGoogle",
      method: "get"
    },
    {
      link: "/googleCallback",
      modules: "admins",
      controller: st,
      action: "googleCallback",
      method: "get"
    },
    {
      link: "/logout",
      modules: "admins",
      controller: st,
      action: "logout"
    },
    {
      link: "/forget",
      modules: "admins",
      controller: st,
      action: "forget",
      method: "post"
    },
    {
      link: "/forgetConfirmOtp",
      modules: "admins",
      controller: st,
      action: "forgetConfirmOtp"
    },
    {
      link: "/forgetResendOtp",
      modules: "admins",
      controller: st,
      action: "forgetResendOtp"
    },
    {
      link: "/forgetPassword",
      modules: "admins",
      controller: st,
      action: "forgetPassword",
      method: "post"
    },
    {
      link: "/refreshToken",
      modules: "admins",
      controller: st,
      action: "refreshToken"
    },
    {
      link: "/accounts/getProfile",
      modules: "admins",
      controller: it,
      action: "profile"
    },
    {
      link: "/accounts/editProfile",
      modules: "admins",
      controller: it,
      action: "editProfile",
      method: "post"
    },
    {
      link: "/accounts/changePassword",
      modules: "admins",
      controller: it,
      action: "changePassword",
      method: "post"
    },
    {
      link: "/accounts/linkGoogle",
      modules: "admins",
      controller: it,
      action: "linkGoogle",
      method: "get"
    },
    {
      link: "/accounts/redirectToLinkGoogle",
      modules: "admins",
      controller: it,
      action: "redirectToLinkGoogle",
      method: "get"
    },
    {
      link: "/linkGoogleCallback",
      modules: "admins",
      controller: it,
      action: "linkGoogleCallback",
      method: "get"
    },
    {
      link: "/accounts/unlinkGoogle",
      modules: "admins",
      controller: it,
      action: "unlinkGoogle",
      method: "get"
    }
    // {
    //     link: '/elfinder/connector',
    //     modules: 'admins',
    //     controller: FinderController,
    //     action: 'connector',
    //     method: 'post'
    // },
    // {
    //     link: '/elfinder/connector',
    //     modules: 'admins',
    //     controller: FinderController,
    //     action: 'connector',
    //     method: 'get'
    // },
    // {
    //     link: '/elfinder/tmb/:filename',
    //     modules: 'admins',
    //     controller: FinderController,
    //     action: 'tmb',
    // },
    // {
    //     link: '/file/:volume/*',
    //     modules: 'admins',
    //     controller: FinderController,
    //     action: 'file',
    // },
  ]), t.addGS(h + "/users", ce, "admins"), t.add(h, [
    {
      link: "/users/adminChangeUserPassword/:code([0-9]+)",
      modules: "admins",
      controller: ce,
      action: "adminChangeUserPassword"
    }
  ]), t.addGS(h + "/group", Tt, "admins"), t.add(h, [
    {
      link: "/group/getFunctionIds/:code([0-9]+)",
      modules: "admins",
      controller: Tt,
      action: "getFunctionIds"
    },
    {
      link: "/group/editRole/:code([0-9]+)",
      modules: "admins",
      controller: Tt,
      action: "editRole",
      method: "post"
    },
    {
      link: "/group/checkPermission",
      modules: "admins",
      controller: Tt,
      action: "checkPermission"
    }
  ]), t.addGS(h + "/adminFunction", Ft, "admins"), t.add(h, [
    {
      link: "/adminFunction/getFuncMenu",
      modules: "admins",
      controller: Ft,
      action: "getFuncMenu"
    },
    {
      link: "/adminFunction/getPermissonMenu",
      modules: "admins",
      controller: Ft,
      action: "getPermissonMenu"
    }
  ]), t.add(h, [
    {
      link: "/config/update",
      modules: "admins",
      controller: de,
      action: "update",
      method: "post"
    },
    {
      link: "/config/getAll",
      modules: "admins",
      controller: de,
      action: "getAll"
    }
  ]), t.addGS(h + "/depts", le, "admins"), t.add(h, [
    {
      link: "/depts/getDepts",
      modules: "admins",
      controller: le,
      action: "getDepts"
    }
  ]), t.addGS(h + "/logs", Fe, "admins"), t.addGS(h + "/menuType", Ve, "admins"), t.addGS(h + "/menu", ue, "admins"), t.add(h, [
    {
      link: "/menu/getFuncMenu",
      modules: "admins",
      controller: ue,
      action: "getFuncMenu"
    }
  ]), t.addGS(h + "/newsCategories", he, "admins"), t.add(h, [
    {
      link: "/newsCategories/getTree/:parent_id",
      modules: "admins",
      controller: he,
      action: "getTree"
    }
  ]), t.addGS(h + "/news", Vt, "admins"), t.add(h, [
    {
      link: "/news/getParentSimple",
      modules: "admins",
      controller: Vt,
      action: "getParentSimple"
    },
    {
      link: "/news/:alias",
      modules: "admins",
      controller: Vt,
      action: "detailByAlias"
    }
  ]), t.addGS(h + "/banners", We, "admins"), t.addGS(h + "/packages", Ge, "admins"), t.addGS(h + "/products", Ke, "admins"), t.addGS(h + "/productReviews", Ye, "admins"), t.addGS(h + "/productReviewsReply", es, "admins"), t.addGS(h + "/productPrice", He, "admins"), t.addGS(h + "/categories", Ue, "admins"), t.addGS(h + "/vouchers", Qe, "admins"), t.addGS(h + "/promotions", ze, "admins"), t.addGS(h + "/voucherStore", Xe, "admins"), t.addGS(h + "/voucherStoreCustomer", Ze, "admins"), t.addGS(h + "/voucherInvited", ts, "admins"), t.addGS(h + "/stores", ss, "admins"), t.addGS(h + "/pages", Z, "admins"), t.add(h, [
    {
      link: "/pages/addNewSection/:code([0-9]+)",
      modules: "admins",
      controller: Z,
      action: "addNewSection",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/editSection",
      modules: "admins",
      controller: Z,
      action: "editSection",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/deleteSection",
      modules: "admins",
      controller: Z,
      action: "deleteSection",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/addNewCol",
      modules: "admins",
      controller: Z,
      action: "addNewCol",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/editCol",
      modules: "admins",
      controller: Z,
      action: "editCol",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/deleteCol",
      modules: "admins",
      controller: Z,
      action: "deleteCol",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/type",
      modules: "admins",
      controller: Z,
      action: "type"
    },
    {
      link: "/pages/:code([0-9]+)/sortCol",
      modules: "admins",
      controller: Z,
      action: "sortCol",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/sortRow",
      modules: "admins",
      controller: Z,
      action: "sortRow",
      method: "post"
    },
    {
      link: "/pages/:code([0-9]+)/sortSection",
      modules: "admins",
      controller: Z,
      action: "sortSection",
      method: "post"
    }
  ]), t.getRouter();
}, os = rs();
let Wt = class extends B {
  async register() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getHeader("Secret-Key");
      if (!t) throw new Error("invaild_empty_secretkey");
      ft.checkSecretKey(t);
      const e = this.models.customerRegister, s = {
        phone: this.request.getPost("phone"),
        name: this.request.getPost("name"),
        captcha: this.request.getPost("captcha"),
        referral_code: this.request.getPost("referral_code")
      };
      if (await e.validate(s, e.validateRegister) || e.getErrors().forEach((o) => {
        throw new Error(o);
      }), s.referral_code && !await this.models.customer.findOne({ phone: s.referral_code }))
        throw new Error("invalid_referral_code");
      const r = await e.createItem(s);
      return this.resJsonData(r);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async registerConfirmOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.customerRegister, e = this.request.getPost("phone"), s = this.request.getPost("name"), r = this.request.getPost("referral_code");
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const o = { phone: e, name: s, referral_code: r }, n = this.models.customer;
      await n.validate(o, n.validateRegister) || n.getErrors().forEach((m) => {
        throw new Error(m);
      });
      const a = await t.findOne({ phone: e, referral_code: r });
      if (!a)
        throw new Error("invalid_customerregister");
      const i = this.request.getPost("password"), c = this.request.getPost("confirmPassword");
      if (!i || i !== c)
        throw new Error("password_mismatch");
      const d = await M.makePassword(i), l = {};
      a.phone && (l.phone = a.phone), a.username && (l.username = a.username), a.email && (l.email = a.email), a.avatar && (l.avatar = a.avatar), a.referral_code && (l.referral_code = a.referral_code), l.fullname = a.name, l.password = d, l.status = 1, l.created_at = /* @__PURE__ */ new Date(), l.updated_at = /* @__PURE__ */ new Date();
      const u = await n.vdSave(l);
      if (!u) throw new Error("failed_to_save_customer");
      await t.deleteOne({ id: a.id }), this.resJsonData({
        message: "register_confirm_success",
        customer: {
          id: u.id,
          fullname: u.fullname,
          email: u.email
        }
      });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async registerResendOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.customerRegister, e = this.request.getPost("phone"), s = await t.findOne({ phone: e });
      if (!s)
        throw new Error("invalid_404");
      const r = s.reference_code = Math.floor(1e5 + Math.random() * 9e5);
      s.updated_at = /* @__PURE__ */ new Date(), await t.vdSave(s), this.resJsonData({ phone: e, otp: r });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
};
class Q extends B {
  async login() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getHeader("Secret-Key");
      if (!t) throw new Error("invalid_empty_secretkey");
      ft.checkSecretKey(t);
      const e = this.request.getPost("phone"), s = this.request.getPost("password"), r = {
        phone: e,
        password: s
      }, o = this.models.customer;
      await o.validate(r, o.validateLogin) || o.getErrors().forEach((i) => {
        throw new Error(i);
      });
      const n = await o.findOne({ phone: e, is_deleted: 0, status: 1 });
      if (!n) throw new Error("invalid_customer_authentication");
      if (!await M.checkPassword(s, n.password))
        throw new Error("invalid_authentication");
      const a = await this.models.customertoken.createByCustomer(n, this.req);
      return this.resJsonData({ message: "login_success", accessToken: a.access_token, refreshToken: a.refresh_token, expired_at: a.expired_at });
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  // async logout() {
  //     try {
  //         const refreshToken = this.req.cookies?.refreshToken;
  //         if (refreshToken) {
  //             this.res.clearCookie('refreshToken', { path: '/' });
  //             this.res.clearCookie('expired_at', { path: '/' });
  //             this.res.clearCookie('accessToken', { path: '/' });
  //             await this.models.customertoken.findOne({ refreshToken });
  //             return this.resJsonData({ msg: "logout_successful" });
  //         }
  //         return this.resJsonData({ msg: "logout_failed" });
  //     } catch (error: any) {
  //         return this.resJsonErr(error.message);
  //     }
  // }
  async logout() {
    try {
      const t = this.request.getPost("refreshToken");
      if (this.res.clearCookie("refreshToken", { path: "/" }), this.res.clearCookie("expiredAt", { path: "/" }), this.res.clearCookie("accessToken", { path: "/" }), t) {
        const e = await this.models.customertoken.findOne({
          refresh_token: t
        });
        return e && await this.models.customertoken.deleteOne({ id: e.id }), this.resJsonData({ message: "logout_successful" });
      }
      return this.resJsonData({ message: "logout_successful" });
    } catch (t) {
      return console.error("Database error during logout:", t), this.resJsonErr("logout_failed_server");
    }
  }
  async refreshToken() {
    try {
      const t = await this.models.customertoken.refreshToken(this);
      this.resJsonData({ expiredAt: t.expired_at });
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async forget() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getPost("phone");
      if (!await this.models.customer.findOne({ phone: t, is_deleted: 0 })) throw new Error("invalid_customer_id");
      const s = this.models.customerForget, r = {};
      r.phone = t;
      let o = await s.findOne(r);
      o || (o = {}, o.phone = t), o.reference_code = Math.floor(1e5 + Math.random() * 9e5), o.updated_at = /* @__PURE__ */ new Date(), await s.vdSave(o), this.resJsonData({ phone: t, otp: o.reference_code });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetConfirmOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.customerForget, e = this.request.getPost("phone"), s = this.request.getPost("otp"), r = await t.findOne({ phone: e, reference_code: s });
      if (!r)
        throw new Error("invalid_otp");
      r.updated_at = /* @__PURE__ */ new Date(), await t.vdSave(r), this.resJsonData({
        message: "OTP confirmed successfully. You can now set a new password.",
        phone: e,
        reference_code: r.reference_code
      });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetResendOtp() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.models.customerForget, e = this.request.getPost("phone"), s = await t.findOne({ phone: e });
      if (!s) throw new Error("invalid_phone");
      if (!await this.models.customer.findOne({ phone: e, is_deleted: 0 })) throw new Error("invalid_customer_id");
      const o = s.reference_code = Math.floor(1e5 + Math.random() * 9e5);
      s.updated_at = /* @__PURE__ */ new Date(), await t.vdSave(s), this.resJsonData(o);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async forgetPassword() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_method_403");
      const t = this.request.getPost("phone"), e = this.request.getPost("reference_code"), s = this.request.getPost("password"), r = this.models.customerForget, o = await r.findOne({ phone: t, reference_code: e });
      if (!o) throw new Error("invalid_otp");
      const n = this.models.customer, a = await n.findOne({ phone: t, is_deleted: 0 });
      if (!a) throw new Error("invalid_forget");
      const i = {
        phone: t,
        password: s
      };
      if (n.validate(i, n.validateForgetPassowrd) || n.getErrors().forEach((c) => {
        throw new Error(c);
      }), a.password = await M.makePassword(s), a.updated_at = /* @__PURE__ */ new Date(), !o.id)
        throw new Error("forget_id_missing");
      await r.deleteOne({ id: o.id }), await n.vdSave(a), this.resJsonData({
        message: "Password reset successful!",
        phone: t
      });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getCaptcha() {
    try {
      const t = Se.create({
        size: 2,
        noise: 3,
        color: !0,
        background: "#cc9966",
        ignoreChars: "0o1il"
      });
      this.req.session.captcha = t.text, this.res.type("image/svg+xml"), this.res.send(t.data);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async redirectToGoogle() {
    try {
      const e = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID_1,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_1,
        redirectUri: process.env.CALLBACK_URL_CUSTOMERS
      }).generateAuthUrl({
        access_type: "offline",
        scope: ["openid", "profile", "email"],
        prompt: "consent",
        redirect_uri: "http://localhost:3000/customers/googleCallback",
        client_id: process.env.GOOGLE_CLIENT_ID_1
      });
      this.res.redirect(e);
    } catch (t) {
      this.res.status(400).send({ msg: t.message });
    }
  }
  async googleCallback() {
    try {
      const t = new _t.auth.OAuth2({
        clientId: process.env.GOOGLE_CLIENT_ID_1,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_1,
        redirectUri: process.env.CALLBACK_URL_CUSTOMERS
      }), e = this.request.get("code");
      if (!e) throw new Error("missing_code");
      const { tokens: s } = await t.getToken(e);
      t.setCredentials(s);
      const r = s.id_token;
      if (!r) throw new Error("invaild_idToken");
      const n = (await t.verifyIdToken({
        idToken: r,
        audience: process.env.GOOGLE_CLIENT_ID_1
      })).getPayload(), { sub: a, email: i, name: c, picture: d } = n, l = this.models.customer;
      let u = await l.findOne({ google_id: a });
      console.log(u);
      const m = (_) => _.toISOString().slice(0, 19).replace("T", " "), g = /* @__PURE__ */ new Date();
      if (u || (u = await l.findOne({ email: i })), u)
        u.google_id = a, u.email = i, u.status = 1, u.updated_at = m(g), u = await l.vdSave(u, l.validate);
      else {
        const _ = {
          google_id: a,
          email: i,
          fullname: c,
          avatar: d,
          status: 1,
          created_at: m(g),
          updated_at: m(g)
        };
        u = await l.vdSave(_, l.validate);
      }
      await this.models.customertoken.createByCustomer(u, this.req);
      const I = process.env.SITE_URL || "http://localhost:5173";
      this.res.redirect(I);
    } catch (t) {
      this.res.status(400).send({ msg: t.message });
    }
  }
}
class te {
  static decode(t) {
    const e = process.env.JWT_CUSTOMER_KEY || process.env.JWT_KEY || "";
    return At.verify(t, e);
  }
  static createToken(t, e) {
    const s = process.env.JWT_CUSTOMER_KEY || process.env.JWT_KEY || "", r = Number(process.env.JWT_CUSTOMER_TIMEOUT || 3600), o = process.env.JWT_AUD, n = process.env.JWT_ISS, a = e.ip, i = e.headers["user-agent"], c = {
      iss: n,
      aud: o,
      sub: t.id,
      name: t.fullname,
      ip: a,
      us: i,
      type: "customer"
    };
    return At.sign(c, s, {
      algorithm: "HS256",
      expiresIn: r
    });
  }
  static verifyToken(t) {
    const e = t.headers.authorization;
    if (!e || !e.startsWith("Bearer "))
      throw new Error("invalid_authorization_header");
    const s = e.split(" ")[1];
    if (!s) throw new Error("invalid_empty_accessToken");
    const r = this.decode(s);
    if (!r?.sub) throw new Error("invalid_customerid_accessToken");
    const o = t.headers["user-agent"] || "unknown";
    if (r.us !== o) throw new Error("invalid_us_accessToken");
    return r.accessToken = s, r;
  }
}
class ot extends B {
  async beforeRouter() {
    try {
      const e = (await this.checkToken()).sub, s = await this.models.customer.findOne({ id: e, status: 1 });
      if (!s) throw new Error("invalid_customer");
      this.customer = s, this.customerId = e;
    } catch (t) {
      throw new Error(t.message);
    }
  }
  async checkToken() {
    const t = te.verifyToken(this.req), e = t.sub, s = await this.models.customertoken.findOne({ customer_id: e, access_token: t.accessToken });
    if (!s)
      throw new Error("invalid_customer_token");
    if (s.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
    return s.expiredAt < Date.now() && await this.models.customertoken.refreshToken(this), t;
  }
}
class Kt extends ot {
  async profile() {
    try {
      const t = await this.models.customer.findOne({ id: this.customer.id });
      if (!t) throw new Error("invalid_customer_id");
      t.password = null, t.groupName = await this.models.groups.getName(t.group_id), this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async editProfile() {
    try {
      const t = await this.models.customer.findOne({ id: this.customer.id });
      if (!t) throw new Error("invalid_customer_id");
      const e = this.models.customer, s = { ...t };
      if (t.email = this.request.getPost("email"), t.fullname = this.request.getPost("fullname"), t.username = this.request.getPost("username"), t.gender = this.request.getPost("gender"), t.birthday = this.request.getPost("birthday"), t.updated_at = /* @__PURE__ */ new Date(), await e.vdSave(t, e.validate) === !1)
        throw new Error("profile_validation_failed");
      t.password = null, s.password = null, this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async changePassword() {
    try {
      if (!this.request.isPost()) throw new Error("invalid_post_403");
      let t = await this.models.customer.findOne({ id: this.customer.id });
      if (!t) throw new Error("invalid_customer_id");
      const e = this.request.getPost("currentPassword"), s = this.request.getPost("confirmPassword"), r = this.request.getPost("password");
      if (r !== s)
        throw new Error("Mật khẩu và xác nhận mật khẩu không khớp.");
      if (!M.checkPassword(e, t.password))
        throw new Error("invalid_500");
      const o = {
        password: r
      }, n = this.models.customer;
      n.validate(o, n.validatePassword) || n.getErrors().forEach((a) => {
        throw new Error(a);
      }), t.password = await M.makePassword(this.request.getPost("password")), t = await n.vdSave(t), t.password = null, this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class xt extends T {
  constructor() {
    super(...arguments), this.table = "product_promotions", this.vdObject = {
      store_id: "required|number",
      product_id: "required|number",
      promotion_id: "required|number",
      discount_type: "required|maxLen(1)",
      discount: "required|number|minVal(0)",
      start_date: "required|date",
      end_date: "required|date",
      quantity: "number",
      remaining_quantity: "number",
      customer_quantity: "number",
      status: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      store_id: "ID Cửa hàng",
      product_id: "ID Sản phẩm",
      promotion_id: "ID Chương trình KM",
      product_price_id: "ID Giá sản phẩm",
      flash_type: "Loại Flash Sale",
      start_date: "Ngày bắt đầu",
      end_date: "Ngày kết thúc",
      quantity: "Tổng số lượng khuyến mãi",
      remaining_quantity: "Số lượng còn lại",
      used_quantity: "Số lượng đã dùng",
      customer_quantity: "Số lượng tối đa/KH",
      discount_type: "Loại chiết khấu",
      discount: "Giá trị chiết khấu",
      status: "Trạng thái",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa mềm"
    }[t] ?? t;
  }
  async getData(t, e = 0) {
    const s = t.get("productIdSh"), r = t.get("promotionIdSh"), o = t.get("statusSh"), n = [];
    s && n.push(`product_promotions.product_id = ${Number(s)}`), r && n.push(`product_promotions.promotion_id = ${Number(r)}`), o && n.push(`product_promotions.status = ${Number(o)}`), e === 0 || e === "0" ? n.push("product_promotions.is_deleted = 0") : (e === 1 || e === "1") && n.push("product_promotions.is_deleted = 1");
    const a = n.length ? n.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      a,
      { "product_promotions.start_date": "DESC" },
      i,
      c,
      "\n                LEFT JOIN `product` ON product_promotions.product_id = `product`.id\n                LEFT JOIN `stores` ON product_promotions.store_id = `stores`.id\n                LEFT JOIN `promotions` ON product_promotions.promotion_id = `promotions`.id\n            ",
      "\n                product_promotions.*, \n                `product`.name AS productName,\n                `stores`.name AS storeName,\n                `promotions`.name AS promotionsName\n    "
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
  async getProductsPromotions(t) {
    if (!t || t <= 0) return null;
    const e = `
        SELECT *
        FROM ${this.table}
        WHERE product_id = ? AND is_deleted = 0 AND status = 1
    `, [s] = await this.query(e, [t]);
    return s && s.length > 0 ? s : null;
  }
  async getProductPromotionsByPromotionId(t) {
    const e = `promotion_id = ${t} AND status = 1 AND is_deleted = 0`;
    return await this.find(
      e,
      !1,
      !1,
      void 0,
      "product_id, discount, remaining_quantity"
    ) || [];
  }
  async getProductPromotionsByPromotionIds(t) {
    if (t.length === 0)
      return [];
    const s = `
            promotion_id IN (${t.join(",")}) AND status = 1 AND is_deleted = 0
        `;
    return await this.find(
      s,
      !1,
      0,
      void 0,
      "*"
    );
  }
}
class dt extends T {
  constructor() {
    super(...arguments), this.table = "packages", this.vdObject = {
      name: "required|minLen(2)|maxLen(250)|unique(packages,name)",
      alias: "maxLen(150)|unique(packages,alias)",
      short_name: "maxLen(50)",
      excerpt: "maxLen(255)",
      image: "maxLen(150)",
      layout: "maxLen(30)",
      status: "numeric|min(0)|max(1)",
      is_deleted: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Gói",
      alias: "Đường dẫn (Alias)",
      name: "Tên Gói",
      short_name: "Tên rút gọn",
      excerpt: "Mô tả ngắn",
      image: "Hình ảnh đại diện",
      status: "Trạng thái",
      layout: "Bố cục",
      is_deleted: "Đã xóa",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = [];
    if (s === 0 || s === "0" ? n.push("packages.is_deleted = 0") : (s === 1 || s === "1") && n.push("packages.is_deleted = 1"), r) {
      const l = `%${r}%`;
      n.push(`packages.name LIKE '${l}'`);
    }
    o != null && o !== "" && n.push(`packages.status = ${Number(o)} `);
    const a = n.length ? n.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), d = await this.findWithPagination(
      a,
      { "packages.created_at": "DESC", "packages.id": "DESC" },
      i,
      c
    );
    return {
      page: d.page,
      pageLen: d.length,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
  async getNamesByIds(t) {
    const e = /* @__PURE__ */ new Map();
    if (!t || t.length === 0)
      return e;
    const r = Array.from(new Set(t)).join(","), o = `
            SELECT id, name 
            FROM \`${this.table}\` 
            WHERE id IN (${r}) AND is_deleted = 0
        `, [n] = await this.query(o);
    if (!n || n.length === 0)
      return e;
    for (const a of n) {
      const i = Number(a.id);
      !isNaN(i) && a.name && e.set(i, String(a.name));
    }
    return e;
  }
  async getPackageNameById(t) {
    return await this.findOne({ id: t });
  }
}
class tt extends T {
  constructor() {
    super(...arguments), this.table = "product_price", this.vdObject = {
      product_id: "required|number",
      package_id: "number",
      price: "required|number|minVal(0)",
      is_dist: "number",
      sold_quantity: "number",
      remaining_quantity: "number",
      quantity: "number"
    }, this.validatePriceUpdate = {
      price: "required|number|minVal(0)",
      remaining_quantity: "number",
      quantity: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      product_id: "ID Sản phẩm",
      package_id: "ID Gói/Quy cách",
      is_dist: "Giá phân phối",
      price: "Giá",
      sold_quantity: "Số lượng đã bán",
      remaining_quantity: "Số lượng còn lại",
      quantity: "Tổng số lượng",
      updated_at: "Thời gian cập nhật"
    }[t] ?? t;
  }
  async getDatas(t) {
    const e = t.get("productIdSh"), s = t.get("packageIdSh"), r = t.get("isDistSh"), o = t.get("productNameSh"), n = t.get("codeSh"), a = [];
    if (o) {
      const g = `%${o}%`;
      a.push(`product.name LIKE '${g}'`);
    }
    n && a.push(`product.code = '${n}'`), e && a.push(`product_price.product_id = ${Number(e)}`), s && a.push(`product_price.package_id = ${Number(s)}`), r && a.push(`product_price.is_dist = ${Number(r)}`);
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), m = await this.findWithPagination(
      i,
      { "product_price.product_id": "ASC", "product_price.package_id": "ASC" },
      c,
      d,
      "\n            LEFT JOIN `product` ON product_price.product_id = `product`.id\n            LEFT JOIN `packages` ON product_price.package_id = `packages`.id\n        ",
      "\n            product_price.*, \n            `product`.name AS productName,\n            `packages`.name AS packageName\n"
    );
    return {
      page: m.page,
      pageLen: m.length,
      pageTotal: m.pageTotal,
      recordTotal: m.recordTotal,
      data: m.items
    };
  }
  // public async getPricesByProductIds(productIds: number[]): Promise<ProductPriceData[]> {
  //     if (!productIds || productIds.length === 0) return [];
  //     const validIds = productIds.filter(id => id > 0);
  //     const idList = validIds.join(',');
  //     const sql = `
  //         SELECT 
  //             T1.id, 
  //             T1.product_id, 
  //             T1.package_id, 
  //             IFNULL(T1.price, 0) AS price, 
  //             T1.remaining_quantity
  //         FROM 
  //             \`product_price\` T1
  //         WHERE 
  //             T1.product_id IN (${idList})
  //     `;
  //     const [rows]: any = await this.query(sql);
  //     return rows as ProductPriceData[];
  // }
  async getPricesByProductIds(t) {
    if (!t || t.length === 0) return [];
    const e = t.filter((n) => n > 0);
    if (e.length === 0) return [];
    const r = `
        SELECT 
            T1.id, 
            T1.product_id, 
            T1.package_id, 
            IFNULL(T1.price, 0) AS price, 
            T1.remaining_quantity,
            T2.store_id,             
            T3.name AS packageName   
        FROM 
            \`product_price\` T1
        INNER JOIN \`product\` T2 ON T1.product_id = T2.id
        LEFT JOIN \`packages\` T3 ON T1.package_id = T3.id 
        WHERE 
            T1.product_id IN (${e.join(",")})
    `, [o] = await this.query(r);
    return o;
  }
  async getSingleProductPrice(t) {
    const e = await this.findOne({ id: t });
    if (!e || !e.product_id || !e.package_id)
      return null;
    const s = e.product_id, r = e.package_id, o = new R(this.pool), n = new dt(this.pool), [a, i] = await Promise.all([
      o.getProductNameById(s),
      n.getPackageNameById(r)
    ]);
    return {
      ...e,
      productName: a?.name || null,
      packageName: i?.name || null,
      store_id: a?.store_id || null,
      image: a?.image || null
    };
  }
  async getMultiProductPrices(t) {
    if (!t || t.length === 0)
      return [];
    const e = t.map((r) => this.getSingleProductPrice(r));
    return (await Promise.all(e)).filter((r) => r !== null);
  }
}
class lt extends T {
  constructor() {
    super(...arguments), this.table = "promotions", this.vdObject = {
      store_id: "required|number",
      name: "required|minLen(2)|maxLen(256)",
      alias: "maxLen(255)|unique(promotions,alias)",
      date_type: "number",
      start_date: "date",
      end_date: "date",
      start_time: "time",
      end_time: "time",
      day_of_week: "maxLen(255)",
      status: "number",
      nofi_type: "number",
      flash_type: "maxLen(10)"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      store_id: "ID Cửa hàng",
      alias: "Đường dẫn (Alias)",
      name: "Tên chương trình",
      description: "Mô tả",
      image: "Hình ảnh",
      date_type: "Loại thời gian áp dụng",
      start_date: "Ngày bắt đầu",
      end_date: "Ngày kết thúc",
      start_time: "Giờ bắt đầu",
      end_time: "Giờ kết thúc",
      day_of_week: "Ngày trong tuần áp dụng",
      status: "Trạng thái",
      nofi_type: "Loại thông báo",
      flash_type: "Loại Flash Sale",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa mềm"
    }[t] ?? t;
  }
  async getDatas(t, e = 0, s = !0) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("storeIdSh"), a = t.get("startSh"), i = t.get("ft"), c = [];
    if (r) {
      const g = `%${r}%`;
      c.push(`promotions.name LIKE '${g}'`);
    }
    o && c.push(`promotions.status = ${Number(o)} `), i && c.push(`promotions.flash_type = '${i}'`), n && c.push(`promotions.store_id = ${Number(n)} `), a && c.push(`DATE(promotions.created_at) = DATE('${a}')`), e === 0 || e === "0" ? c.push("promotions.is_deleted = 0") : (e === 1 || e === "1") && c.push("promotions.is_deleted = 1");
    const d = c.length ? c.join(" AND ") : "1", l = parseInt(t.get("page", "1")), u = parseInt(t.get("pageLen", "10")), m = await this.findWithPagination(
      d,
      { "promotions.created_at": "DESC" },
      l,
      u
    );
    return {
      page: m.page,
      pageLen: m.length,
      pageTotal: m.pageTotal,
      recordTotal: m.recordTotal,
      data: m.items
    };
  }
  async getAllActiveSlots(t) {
    const e = t.get("ft"), s = this.table, r = [];
    r.push(`${s}.status = 1`), r.push(`${s}.is_deleted = 0`), r.push(`${s}.date_type = 5`), e && r.push(`${s}.flash_type = '${e}'`);
    const o = r.length ? r.join(" AND ") : "1", n = { start_time: "ASC" };
    return await this.find(
      o,
      n,
      0,
      void 0,
      "*"
    );
  }
  async getFlashSale(t, e) {
    const s = /* @__PURE__ */ new Date(), r = new lt(this.pool), n = (await r.getAllActiveSlots(t)).filter(
      (y) => r.isPromotionActive(y, s)
    );
    if (n.length === 0) return [];
    const a = n.map((y) => y.id).filter((y) => y > 0), c = await new xt(this.pool).getProductPromotionsByPromotionIds(a), d = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
    let u = !1;
    c.forEach((y) => {
      y.product_id && d.add(y.product_id), y.product_price_id === -1 ? u = !0 : y.product_price_id && y.product_price_id > 0 && l.add(y.product_price_id);
    });
    const m = Array.from(d);
    u && m.length > 0 && (await new tt(this.pool).getPricesByProductIds(m)).forEach((x) => {
      x.id && x.id > 0 && l.add(x.id);
    });
    const g = Array.from(l), I = new R(this.pool), _ = await I.getProductsByIds(m), w = await I.getCalculatedMultiPrices(g, e), E = /* @__PURE__ */ new Map();
    w.forEach((y) => {
      if (y.product_id) {
        const A = E.get(y.product_id) || [];
        A.push(y), E.set(y.product_id, A);
      }
    });
    const D = /* @__PURE__ */ new Map();
    _.forEach((y) => y.id && D.set(y.id, y));
    const S = /* @__PURE__ */ new Map();
    w.forEach((y) => y.product_price_id && S.set(y.product_price_id, y));
    const N = /* @__PURE__ */ new Map();
    for (const y of n) {
      const A = y.id, x = c.filter((p) => p.promotion_id === A), C = new R(this.pool).mergePromotionData(x, [y]), k = [];
      for (const p of C) {
        const f = p.product_id, P = D.get(p.product_id) || {}, v = E.get(f) || [];
        k.push({
          ...P,
          ...p,
          prices: v
        });
      }
      N.set(A, {
        ...y,
        products: k
      });
    }
    return Array.from(N.values());
  }
  async getFlashSaleProducts(t, e, s = []) {
    const o = await new lt(this.pool).getAllActiveSlots(t), n = t.get("ft");
    let a = o;
    if (n && (a = a.filter(
      (y) => y.flash_type === n
    )), a.length === 0) return [];
    const i = a.map((y) => y.id).filter((y) => y > 0);
    let d = await new xt(this.pool).getProductPromotionsByPromotionIds(i);
    s.length > 0 && (d = d.filter(
      (y) => s.includes(y.store_id)
    ));
    const l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set();
    let m = !1;
    d.forEach((y) => {
      y.product_id && l.add(y.product_id), y.product_price_id === -1 ? m = !0 : y.product_price_id && y.product_price_id > 0 && u.add(y.product_price_id);
    });
    const g = Array.from(l);
    m && g.length > 0 && (await new tt(this.pool).getPricesByProductIds(g)).forEach((x) => {
      x.id && x.id > 0 && u.add(x.id);
    });
    const I = Array.from(u), _ = new R(this.pool), w = await _.getProductsByIds(g), E = await _.getCalculatedMultiPrices(I, e), D = /* @__PURE__ */ new Map();
    E.forEach((y) => {
      if (y.product_id) {
        const A = D.get(y.product_id) || [];
        A.push(y), D.set(y.product_id, A);
      }
    });
    const S = /* @__PURE__ */ new Map();
    w.forEach((y) => y.id && S.set(y.id, y));
    const N = [];
    for (const y of a) {
      const A = d.filter((C) => C.promotion_id === y.id), x = _.mergePromotionData(A, [y]), b = [];
      for (const C of x) {
        const k = C.product_id;
        if (!k || k <= 0) {
          console.warn("Skipping promotion item due to invalid productId:", k);
          continue;
        }
        const p = Number(k), f = S.get(p) || {};
        if (!f) {
          console.warn(`Skipping promotion item: Product ID ${p} not found in productDetails.`);
          continue;
        }
        const P = D.get(p) || [], q = P.length > 0 ? P[0] : {}, v = {
          flash_type: y.flash_type,
          ...f,
          ...q,
          store_id: f.store_id,
          id: f.id,
          prices: P
        };
        b.push(v);
      }
      N.push(...b);
    }
    return N;
  }
  isPromotionActive(t, e) {
    const s = e.getHours(), r = e.getMinutes(), o = e.getDay();
    if (t.status !== 1 || t.is_deleted === 1 || t.start_date && new Date(t.start_date) > e)
      return !1;
    if (t.end_date) {
      const i = new Date(t.end_date), c = new Date(i.getFullYear(), i.getMonth(), i.getDate());
      if (new Date(e.getFullYear(), e.getMonth(), e.getDate()) > c)
        return !1;
    }
    if (t.day_of_week)
      try {
        if (!JSON.parse(t.day_of_week).includes(String(o)))
          return !1;
      } catch (i) {
        return console.error("Error parsing day_of_week JSON:", i), !1;
      }
    const n = t.start_time?.split(":").map(Number), a = t.end_time?.split(":").map(Number);
    if (n && a) {
      const i = n[0] * 60 + n[1], c = a[0] * 60 + a[1], d = s * 60 + r;
      if (d < i || d > c)
        return !1;
    }
    return !0;
  }
  async getPromotion(t) {
    if (t.length === 0) return [];
    const r = `id IN (${Array.from(new Set(t)).join(",")}) AND is_deleted = 0 AND status = 1`;
    return await new lt(this.pool).find(
      r,
      !1,
      !1
    );
  }
}
class ee extends T {
  constructor() {
    super(...arguments), this.table = "categories", this.vdObject = {
      name: "required|minLen(2)|maxLen(250)",
      alias: "maxLen(150)|unique(categories,alias)",
      level: "number",
      sort_order: "number",
      status: "number",
      parent_id: "number"
    }, this.validateCategory = {
      name: "required|minLen(2)|maxLen(250)",
      alias: "maxLen(150)|alias",
      parent_id: "number",
      sort_order: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      alias: "Đường dẫn (Alias)",
      level: "Cấp độ",
      name: "Tên danh mục",
      description: "Mô tả",
      meta_title: "Meta Title",
      meta_description: "Meta Description",
      meta_keywords: "Meta Keywords",
      image: "Hình ảnh đại diện",
      sort_order: "Thứ tự sắp xếp",
      status: "Trạng thái",
      parent_id: "Danh mục cha",
      layout: "Layout hiển thị",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa mềm"
    }[t] ?? t;
  }
  async getDatas(t, e = 0, s = !0) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("parentIdSh"), a = [];
    if (r) {
      const u = `%${r}%`;
      a.push(`categories.name LIKE '${u}'`);
    }
    o && a.push(`categories.status = ${Number(o)} `), n != null && n !== "" && a.push(`categories.parent_id = ${Number(n)} `), e === !0 || e === 0 || e === "true" || e === "0" ? a.push("categories.is_deleted = 0") : (e === 1 || e === "1") && a.push("categories.is_deleted = 1");
    const i = a.length ? a.join(" AND ") : "1", c = {
      "categories.sort_order": "ASC",
      "categories.id": "ASC"
    }, d = "LEFT JOIN `categories` AS parent ON categories.parent_id = parent.id", l = "categories.*, parent.name AS parentName";
    if (s) {
      const u = parseInt(t.get("page", "1")), m = t.get("limit"), g = parseInt(t.get("pageLen", "10")), I = m ? parseInt(m) : g, _ = Math.max(1, I), w = await this.findWithPagination(
        i,
        c,
        u,
        _,
        d,
        l
      );
      return {
        page: w.page,
        pageLen: _,
        pageTotal: w.pageTotal,
        recordTotal: w.recordTotal,
        data: w.items
      };
    } else
      return await this.find(
        i,
        c,
        !1,
        d,
        l
      );
  }
  async getAllDescendantIds(t) {
    if (t <= 0) return [t];
    const e = /* @__PURE__ */ new Set([t]), s = /* @__PURE__ */ new Set([t]);
    for (; s.size > 0; ) {
      const r = Array.from(s);
      s.clear();
      const o = `SELECT id FROM categories WHERE parent_id IN (${r.join(",")})`, [n] = await this.query(o);
      if (n.length === 0) break;
      for (const a of n)
        e.has(a.id) || (e.add(a.id), s.add(a.id));
    }
    return Array.from(e);
  }
}
class R extends T {
  constructor() {
    super(...arguments), this.table = "product", this.vdObject = {
      store_id: "required|integer",
      code: "maxLen(20)",
      alias: "required|minLen(2)|maxLen(150)|unique(product,alias)",
      name: "required|minLen(2)|maxLen(150)",
      excerpt: "maxLen(255)",
      meta_title: "maxLen(250)",
      meta_description: "maxLen(250)",
      meta_keywords: "maxLen(250)",
      package_id: "required|integer",
      hot: "numeric|min(0)|max(1)",
      status: "numeric",
      is_deleted: "numeric|min(0)|max(1)",
      reason_cancel: "maxLen(255)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Sản phẩm",
      store_id: "ID Cửa hàng",
      code: "Mã Sản phẩm",
      alias: "Đường dẫn (Alias)",
      name: "Tên Sản phẩm",
      excerpt: "Mô tả ngắn",
      description: "Mô tả",
      content: "Nội dung chi tiết",
      meta_title: "Meta Title",
      meta_description: "Meta Description",
      meta_keywords: "Meta Keywords",
      detail_info: "Thông tin chi tiết",
      image: "Ảnh đại diện",
      gallery: "Bộ sưu tập ảnh",
      hot: "Sản phẩm Hot",
      package_id: "ID Gói/Package",
      category_ids: "ID Danh mục",
      view: "Lượt xem",
      review_total: "Tổng số đánh giá",
      review_point: "Điểm đánh giá TB",
      review_point_1: "Số đánh giá 1 sao",
      review_point_2: "Số đánh giá 2 sao",
      review_point_3: "Số đánh giá 3 sao",
      review_point_4: "Số đánh giá 4 sao",
      review_point_5: "Số đánh giá 5 sao",
      sold: "Số lượng đã bán",
      reason_cancel: "Lý do hủy",
      status: "Trạng thái",
      is_deleted: "Đã xóa",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getData(t, e, s) {
    const r = new R(this.pool), o = new tt(this.pool), n = t.get("nameSh"), a = t.get("codeSh"), i = t.get("statusSh"), c = t.get("package_idSh");
    t.get("category_idsSh");
    const d = t.get("hotSh"), l = t.get("publishDateSh"), u = t.get("store_idSh"), m = t.get("product_idSh"), g = t.get("aliasSh") || t.get("alias"), I = [], _ = [], w = "product", E = Number(s);
    E === 0 ? _.push(`${w}.is_deleted = 0`) : E === 1 && _.push(`${w}.is_deleted = 1`);
    const D = [], S = await t.get("category_ids", [], "ids");
    if (S && S.length > 0) {
      for (const P of S) {
        const q = String(P), v = [];
        v.push(`${w}.category_ids = '["${q}"]'`), v.push(`${w}.category_ids LIKE '["${q}",%'`), v.push(`${w}.category_ids LIKE '%,"${q}"]'`), v.push(`${w}.category_ids LIKE '%,"${q}",%'`), D.push(`(${v.join(" OR ")})`);
      }
      if (D.length > 0) {
        const P = `(${D.join(" OR ")})`;
        _.push(`${w}.category_ids IS NOT NULL`), _.push(`${w}.category_ids != '[]'`), _.push(P);
      }
    }
    if (g && _.push(`product.alias = '${g}'`), n) {
      const P = `%${n}%`;
      _.push(`${w}.name LIKE '${P}'`);
    }
    if (a && _.push(`product.code = '${a}'`), c && _.push(`product.package_id = ${Number(c)} `), m && _.push(`product.id = ${Number(m)} `), u && _.push(`product.store_id = ${Number(u)} `), d != null && d !== "" && _.push(`product.hot = ${Number(d)} `), i != null && i !== "" && _.push(`product.status = ${Number(i)} `), l && _.push(`DATE(product.created_at) = DATE('${l}')`), I.length > 0) {
      const P = [];
      for (const v of I) {
        const L = `"${String(v)}"`, O = [];
        O.push(`${w}.category_ids LIKE '[${L},%'`), O.push(`${w}.category_ids LIKE '%, ${L},%'`), O.push(`${w}.category_ids LIKE '%,${L},%'`), O.push(`${w}.category_ids LIKE '%, ${L}]'`), O.push(`${w}.category_ids LIKE '%,${L}]'`), O.push(`${w}.category_ids = '[${L}]'`), P.push(`(${O.join(" OR ")})`);
      }
      const q = `(${P.join(" OR ")})`;
      _.push(`${w}.category_ids IS NOT NULL`), _.push(`${w}.category_ids != '[]'`), _.push(q);
    }
    const N = _.length ? _.join(" AND ") : "1", y = parseInt(t.get("page", "1")), A = t.get("limit"), x = parseInt(t.get("pageLen", "10")), b = A ? parseInt(A) : x, C = Math.max(1, b), k = await this.findWithPagination(
      N,
      { "product.created_at": "DESC", "product.id": "DESC" },
      y,
      C
    ), p = k.items;
    let f = p;
    if (p.length > 0) {
      const P = [], q = [];
      for (const v of p) {
        const L = v.id;
        typeof L == "number" && L > 0 && P.push(L);
      }
      if (P.length > 0) {
        const v = await o.getPricesByProductIds(P);
        for (const V of v) {
          const W = V.id;
          typeof W == "number" && W > 0 && q.push(W);
        }
        const L = await r.getCalculatedMultiPrices(
          q,
          e
        ), O = /* @__PURE__ */ new Map();
        for (const V of L) {
          const W = V.id;
          typeof W == "number" && W > 0 && O.set(W, V);
        }
        const $ = [];
        for (const V of p) {
          const W = V.store_id, wt = [];
          for (const et of v)
            et.product_id === V.id && wt.push({
              ...et,
              store_id: et.store_id
            });
          const bt = [];
          for (const et of wt) {
            const yt = Number(et.id);
            let Ct = null;
            !Number.isNaN(yt) && yt > 0 && (Ct = O.get(yt)), bt.push({
              ...Ct || et,
              store_id: Ct?.store_id || et.store_id || W
            });
          }
          $.push({
            ...V,
            prices: bt
          });
        }
        f = $;
      }
    }
    return {
      page: k.page,
      pageLen: C,
      pageTotal: k.pageTotal,
      recordTotal: k.recordTotal,
      data: f
    };
  }
  async calculatePackagePrice(t, e, s, r) {
    const o = t.price || 0;
    let n = o;
    const a = o;
    let i = null, c = 0, d = null, l = null, u = null, m = null, g = null, I = null, _ = null, w = null;
    const E = /* @__PURE__ */ new Date();
    if (a > 0 && typeof t.package_id == "number")
      for (const S of e) {
        const y = new lt(this.pool).isPromotionActive(S, E), A = S.remaining_quantity === -1 || S.remaining_quantity > 0;
        if (!y || !A)
          continue;
        let x = a;
        const b = !!S.flash_type;
        S.discount_type === "P" ? x = a * (1 - S.discount_value / 100) : S.discount_type === "F" && (x = a - S.discount_value), x < n && (n = x, i = b ? "FlashSale" : "Promotion", c = S.discount_value, d = S.discount_type, l = S.id, u = S.start_date || null, m = S.end_date || null, g = S.start_time || null, I = S.end_time || null, _ = S.promotion_quantity !== void 0 ? S.promotion_quantity : null, w = S.name || "Chương trình khuyến mãi");
      }
    return {
      ...t,
      price: a,
      expense: n,
      store_id: t.store_id,
      // discount: discountPercentage,
      promotion_fullname: w,
      promotion_type: i,
      discount_value: c,
      discount_type: d,
      product_price_id: t.id,
      promotion_id: l,
      promotion_quantity: _,
      start_date: u,
      end_date: m,
      start_time: g,
      end_time: I
    };
  }
  async getCalculatedSinglePrice(t, e) {
    const s = t.product_id;
    if (!s)
      return t;
    const o = await new xt(this.pool).getProductsPromotions(s), n = o?.map((l) => l.promotion_id).filter((l) => l) || [], i = await new lt(this.pool).getPromotion(n), c = this.mergePromotionData(o, i);
    return await this.calculatePackagePrice(
      t,
      c,
      e,
      s
    );
  }
  mergePromotionData(t, e) {
    if (!t || t.length === 0 || !e || e.length === 0)
      return [];
    const s = /* @__PURE__ */ new Map();
    for (const o of e)
      o.id && s.set(o.id, o);
    const r = [];
    for (const o of t) {
      const n = o.promotion_id;
      if (n && s.has(n)) {
        const a = s.get(n), i = {
          id: a.id,
          status: a.status,
          is_deleted: a.is_deleted,
          name: a.name,
          start_time: a.start_time,
          end_time: a.end_time,
          start_date: a.start_date,
          end_date: a.end_date,
          flash_type: a.flash_type,
          promotion_id: a.id,
          promotion_quantity: o.quantity || 0,
          product_id: o.product_id,
          product_price_id: o.product_price_id,
          discount_value: o.discount || 0,
          discount_percent: o.discount || 0,
          discount_type: o.discount_type,
          customer_quantity: o.customer_quantity || 0,
          remaining_quantity: o.remaining_quantity || 0
        };
        r.push(i);
      }
    }
    return r;
  }
  async getSingleProductPrice(t) {
    const e = await this.findOne({ id: t });
    if (!e || !e.product_id || !e.package_id)
      return null;
    const s = e.product_id, r = e.package_id, o = new R(this.pool), n = new dt(this.pool), [a, i] = await Promise.all([
      o.getProductNameById(s),
      n.getPackageNameById(r)
    ]);
    return {
      ...e,
      productName: a?.name || null,
      packageName: i?.name || null
    };
  }
  async getCalculatedMultiPrices(t, e) {
    const r = await new tt(this.pool).getMultiProductPrices(t);
    if (!r || r.length === 0)
      return [];
    const o = r.map((a) => this.getCalculatedSinglePrice(
      a,
      e
    ));
    return (await Promise.all(o)).filter((a) => a !== null);
  }
  async getProductsByIds(t) {
    if (t.length === 0)
      return [];
    const s = `id IN (${t.map((o) => Number(o)).filter((o) => o > 0).join(",")})`;
    return await this.find(
      s,
      !1,
      1e3,
      void 0,
      "*"
    );
  }
  async findById(t) {
    return t ? await this.findOne({ id: t }) : null;
  }
  async getProductNameById(t) {
    const e = await this.findOne({ id: t, is_deleted: 0 });
    return !e || !e.name || !e.store_id || !e.image ? null : {
      name: e.name,
      store_id: e.store_id,
      image: e.image
    };
  }
  async getMultiProductDetails(t) {
    if (!t || t.length === 0)
      return /* @__PURE__ */ new Map();
    const e = "SELECT * FROM product WHERE id IN (?) AND is_deleted = 0", [s] = await this.query(e, [t]), r = /* @__PURE__ */ new Map();
    return s && s.forEach((o) => {
      r.set(o.id, o);
    }), r;
  }
  async detailByAliasWithPrice(t, e) {
    const s = new R(this.pool), r = new tt(this.pool), o = new dt(this.pool), n = { alias: t, status: 1, is_deleted: 0 }, a = await s.findOne(n);
    if (!a)
      return null;
    const i = a.id;
    if (!i)
      return a;
    const c = await r.getPricesByProductIds([i]), d = /* @__PURE__ */ new Set();
    a.package_id && d.add(a.package_id), c.forEach((I) => {
      I.package_id && d.add(I.package_id);
    });
    const l = Array.from(d);
    let u = /* @__PURE__ */ new Map();
    l.length > 0 && (u = await o.getNamesByIds(l));
    const m = [];
    for (const I of c) {
      const w = await this.getCalculatedSinglePrice(
        I,
        e
      ) || { ...I };
      w.package_id && u.has(w.package_id) && (w.packageName = u.get(w.package_id)), m.push(w);
    }
    return {
      ...a,
      prices: m
    };
  }
  async detailByIdWithPrice(t, e) {
    const s = new R(this.pool), r = new tt(this.pool), o = new dt(this.pool), n = { id: t, status: 1, is_deleted: 0 }, a = await s.findOne(n);
    if (!a)
      return null;
    const i = await r.getPricesByProductIds([t]), c = /* @__PURE__ */ new Set();
    i.forEach((g) => {
      g.package_id && c.add(g.package_id);
    });
    const d = Array.from(c);
    let l = /* @__PURE__ */ new Map();
    d.length > 0 && (l = await o.getNamesByIds(d));
    const u = [];
    for (const g of i) {
      const _ = await this.getCalculatedSinglePrice(
        g,
        e
      ) || { ...g };
      _.package_id && l.has(_.package_id) && (_.packageName = l.get(_.package_id)), u.push(_);
    }
    return {
      ...a,
      prices: u
    };
  }
  async findByCategoryId(t, e, s, r, o = "") {
    const n = this.table, a = String(t), c = `
        ${n}.is_deleted = 0 
        AND ${n}.status = 1 
        AND (
            ${n}.category_ids = '["${a}"]' 
            OR ${n}.category_ids LIKE '["${a}",%'
            OR ${n}.category_ids LIKE '%,"${a}"]'
            OR ${n}.category_ids LIKE '%,"${a}",%'
        )
    ` + o, d = s || { created_at: "DESC" };
    let l;
    return e && typeof e == "number" && r && typeof r == "number" ? l = `${e} OFFSET ${r}` : e && typeof e == "number" && (l = e), this.find(
      c,
      d,
      l
    );
  }
  async getProductsByCategoryAlias(t, e, s = {}) {
    const r = new ee(this.pool), o = new R(this.pool), n = new dt(this.pool), a = new tt(this.pool), i = { alias: t, status: 1, is_deleted: 0 }, c = await r.findOne(i);
    if (!c)
      return [];
    const d = c.id, l = "product", u = s.frating || [];
    let m = "";
    if (u.length > 0) {
      const v = Math.min(...u);
      v >= 1 && v <= 5 && (m = ` AND ${`product.review_point >= ${v}`}`);
    }
    const g = await r.getAllDescendantIds(d), I = [d, ...g], _ = [];
    I.forEach((v) => {
      const L = String(v), O = [];
      O.push(`${l}.category_ids = '["${L}"]'`), O.push(`${l}.category_ids LIKE '["${L}",%'`), O.push(`${l}.category_ids LIKE '%,"${L}"]'`), O.push(`${l}.category_ids LIKE '%,"${L}",%'`), _.push(`(${O.join(" OR ")})`);
    });
    const w = ` AND (${_.join(" OR ")})`, E = s.fcatid || [];
    let D = "";
    if (E.length > 0) {
      const v = [];
      for (const L of E) {
        const O = String(L), $ = [];
        $.push(`${l}.category_ids = '["${O}"]'`), $.push(`${l}.category_ids LIKE '["${O}",%'`), $.push(`${l}.category_ids LIKE '%,"${O}"]'`), $.push(`${l}.category_ids LIKE '%,"${O}",%'`), v.push(`(${$.join(" OR ")})`);
      }
      if (v.length > 0) {
        const L = `(${v.join(" OR ")})`;
        D = ` 
                AND ${l}.category_ids IS NOT NULL
                AND ${l}.category_ids != '[]'
                AND ${L}
            `;
      }
    }
    const S = w + D + m, N = s.order || void 0, y = await o.findWithFilters(
      S,
      s.limit,
      N,
      s.offset
    );
    if (y.length === 0)
      return [];
    const A = y.items, x = A.map((v) => v.id).filter((v) => v != null), b = await a.getPricesByProductIds(x), C = b.map((v) => v.id).filter((v) => v != null), k = /* @__PURE__ */ new Set();
    b.forEach((v) => {
      v.package_id && k.add(v.package_id);
    });
    let p = /* @__PURE__ */ new Map();
    if (k.size > 0) {
      const v = Array.from(k);
      p = await n.getNamesByIds(v);
    }
    const f = await o.getCalculatedMultiPrices(
      C,
      e
    ), P = new Map(
      f.map((v) => [v.id, v])
    ), q = new Map(
      A.filter((v) => v.id !== void 0 && v.id !== null).map((v) => [
        v.id,
        { ...v, prices: [] }
      ])
    );
    for (const v of b) {
      const L = v.id, O = P.get(L);
      let $;
      O ? $ = O : ($ = { ...v }, $.package_id && p.has($.package_id) && ($.packageName = p.get($.package_id)));
      const V = q.get($.product_id);
      V && V.prices.push($);
    }
    return Array.from(q.values());
  }
  async findWithFilters(t, e, s, r) {
    const o = this.table, a = `
        ${o}.is_deleted = 0 
        AND ${o}.status = 1 
    ` + t, i = s || { created_at: "DESC" };
    let c, d = `${o}.*`, l = "";
    (i.min_price || i.max_price || i.min_price || i.max_price) && (c = ` LEFT JOIN product_price T2 ON T2.product_id = ${o}.id `, d = `${o}.*, MIN(T2.price) AS min_price`, l = ` GROUP BY ${o}.id `);
    const u = typeof e == "number" ? e : 10, m = r && typeof r == "number" && u > 0 ? Math.floor(r / u) + 1 : 1;
    return await this.findWithPaginations(
      a,
      i,
      m,
      u,
      c,
      d,
      l
    );
  }
  async getSimilarProductsByAlias(t, e, s = {}) {
    const r = new R(this.pool), o = new ee(this.pool), n = new tt(this.pool), a = new dt(this.pool), i = await r.findOne({ alias: t, is_deleted: 0, status: 1 });
    if (!i || !i.category_ids)
      return [];
    const c = i.id, d = JSON.parse(i.category_ids);
    if (d.length === 0)
      return [];
    const l = d[0], u = await o.getAllDescendantIds(l), m = [l, ...u];
    if (m.length === 0)
      return [];
    const g = "product", I = [];
    m.forEach((f) => {
      const P = String(f), q = [];
      q.push(`${g}.category_ids = '["${P}"]'`), q.push(`${g}.category_ids LIKE '["${P}",%'`), q.push(`${g}.category_ids LIKE '%,"${P}"]'`), q.push(`${g}.category_ids LIKE '%,"${P}",%'`), I.push(`(${q.join(" OR ")})`);
    });
    const _ = ` AND (${I.join(" OR ")})`, w = ` AND ${g}.id != ${c} `, E = _ + w, S = (await r.findWithFilters(
      E,
      s.limit || 10,
      void 0,
      s.offset
    )).items;
    if (S.length === 0)
      return [];
    const N = S.map((f) => f.id).filter((f) => f != null), y = await n.getPricesByProductIds(N), A = y.map((f) => f.id).filter((f) => f != null), x = /* @__PURE__ */ new Set();
    y.forEach((f) => {
      f.package_id && x.add(f.package_id);
    });
    let b = /* @__PURE__ */ new Map();
    if (x.size > 0) {
      const f = Array.from(x);
      b = await a.getNamesByIds(f);
    }
    const C = await r.getCalculatedMultiPrices(A, e), k = new Map(C.map((f) => [f.id, f])), p = new Map(
      S.filter((f) => f.id !== void 0 && f.id !== null).map((f) => [
        f.id,
        { ...f, prices: [] }
      ])
    );
    for (const f of y) {
      const P = k.get(f.id), q = P || { ...f };
      !P && q.package_id && b.has(q.package_id) && (q.packageName = b.get(q.package_id));
      const v = p.get(q.product_id);
      v && v.prices.push(q);
    }
    return Array.from(p.values());
  }
}
class U extends T {
  constructor() {
    super(...arguments), this.table = "vouchers", this.vdObject = {
      name: "required|minLen(2)|maxLen(128)",
      code: "required|maxLen(20)|unique(vouchers,code)",
      voucher_type: "required|number",
      discount_type: "required|maxLen(1)",
      discount: "required|number|minVal(0)",
      min_cost: "number|minVal(0)",
      cost_limit: "number|minVal(0)",
      quantity: "number",
      customer_number: "number",
      date_type: "number",
      status: "number",
      is_deleted: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      name: "Tên Voucher",
      description: "Mô tả",
      image: "Hình ảnh",
      code: "Mã Voucher",
      tier_id: "ID Hạng thành viên",
      quantity: "Tổng số lượng",
      quantity_used: "Số lượng đã dùng",
      customer_number: "Số lượng/Khách hàng",
      voucher_type: "Loại Voucher",
      discount_type: "Loại giảm giá",
      discount: "Giá trị giảm giá",
      min_cost: "Giá trị đơn hàng tối thiểu",
      cost_limit: "Giới hạn giảm tối đa",
      date_type: "Loại thời gian áp dụng",
      start_date: "Ngày bắt đầu",
      end_date: "Ngày kết thúc",
      start_time: "Giờ bắt đầu",
      end_time: "Giờ kết thúc",
      day_of_week: "Ngày trong tuần áp dụng",
      status: "Trạng thái",
      used: "Đã sử dụng",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa mềm"
    }[t] ?? t;
  }
  async getDatas(t, e = 0, s = !0) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("codeSh"), a = t.get("typeSh"), i = [];
    if (r) {
      const d = `%${r}%`;
      i.push(`vouchers.name LIKE '${d}'`);
    }
    if (n) {
      const d = `%${n}%`;
      i.push(`vouchers.code LIKE '${d}'`);
    }
    a && i.push(`vouchers.voucher_type = ${Number(a)} `), o && i.push(`vouchers.status = ${Number(o)} `), e === 0 || e === "0" ? i.push("vouchers.is_deleted = 0") : (e === 1 || e === "1") && i.push("vouchers.is_deleted = 1");
    const c = i.length ? i.join(" AND ") : "1";
    if (s) {
      const d = parseInt(t.get("page", "1")), l = t.get("limit"), u = parseInt(t.get("pageLen", "10")), m = l ? parseInt(l) : u, g = Math.max(1, m), I = await this.findWithPagination(
        c,
        { "vouchers.created_at": "DESC" },
        m,
        d
      );
      return {
        page: I.page,
        pageLen: g,
        pageTotal: I.pageTotal,
        recordTotal: I.recordTotal,
        data: I.items
      };
    } else
      return await this.find(
        c,
        { "vouchers.created_at": "DESC" },
        !1,
        void 0,
        "*"
      );
  }
  // async cartUseVoucher(request: Request, customerId: number): Promise<any> {
  //     const voucherIdPost = request.getPost('voucherId');
  //     const custId = Number(customerId);
  //     const voucherId = Number(voucherIdPost) || 0;
  //     const cartModel = new CartModel(this.pool);
  //     const voucherModel = new VoucherModel(this.pool);
  //     try {
  //         const currentCart = await cartModel.getCustomerCart(custId);
  //         if (!currentCart) throw new Error('Giỏ hàng không tồn tại.');
  //         const cartId = currentCart.id!;
  //         let voucherToApply: VoucherData | null = null;
  //         let discountMessage = 'Đã hủy bỏ mã giảm giá toàn hệ thống.';
  //         let finalVoucherDetail = null;
  //         if (voucherId > 0) {
  //             voucherToApply = await voucherModel.findOne({ id: voucherId });
  //             if (!voucherToApply || Number(voucherToApply.status) !== 1 || Number(voucherToApply.is_deleted) === 1) {
  //                 throw new Error("Mã giảm giá không hợp lệ.");
  //             }
  //             const cartTotal = Number(currentCart.item_total || 0);
  //             const validationError = this.validateGlobalVoucher(voucherToApply, cartTotal, custId);
  //             if (validationError) {
  //                 throw new Error(validationError);
  //             }
  //             discountMessage = `Đã áp dụng mã giảm giá ${voucherToApply.code || voucherId} thành công.`;
  //             finalVoucherDetail = {
  //                 ...voucherToApply,
  //                 discount_value: this.calculateMaxDiscount(voucherToApply, cartTotal),
  //             };
  //         } else {
  //             discountMessage = 'Đã hủy bỏ mã giảm giá toàn hệ thống.';
  //         }
  //         const cartUpdateData: Partial<CartData> = {};
  //         cartUpdateData.voucher_id = voucherId > 0 ? voucherId : null;
  //         await cartModel.update(cartUpdateData, { id: cartId });
  //         await cartModel.recalculateCartTotals(cartId, custId);
  //         const finalResponseData = {
  //             ...finalVoucherDetail,
  //             // status: 200,
  //             message: discountMessage
  //         };
  //         return finalResponseData;
  //     } catch (error: any) {
  //         console.error("Lỗi khi áp dụng Global Voucher:", error);
  //         return (error.message);
  //     }
  // }
  async cartUseVoucher(t, e) {
    const s = t.getPost("voucherId"), r = Number(e), o = Number(s) || 0;
    if (o <= 0) return { msg: "invalid_404", status: 400 };
    const n = new H(this.pool), a = new U(this.pool);
    try {
      const i = await n.getCustomerCart(r);
      if (!i) throw new Error("invalid_404");
      const c = i.id, d = await a.findOne({ id: o });
      if (!d || Number(d.status) !== 1 || Number(d.is_deleted) === 1)
        throw new Error("invalid_404");
      const l = Number(i.item_total || 0);
      return this.validateGlobalVoucher(d, l, r) ? { msg: "invalid_404", status: 400 } : (await n.update({ voucher_id: o }, { id: c }), await n.recalculateCartTotals(c, r), {
        ...d,
        status: 200,
        discount_value: this.calculateMaxDiscount(d, l)
      });
    } catch (i) {
      return console.error("Lỗi apply Global Voucher:", i.message), { msg: "invalid_404", status: 400 };
    }
  }
  async removeVoucher(t, e) {
    const s = Number(e), r = new H(this.pool);
    try {
      const o = await r.getCustomerCart(s);
      if (!o) throw new Error("invalid_404");
      if (!o.voucher_id)
        throw new Error("invalid_404");
      const n = o.id;
      return await r.update({ voucher_id: null }, { id: n }), await r.recalculateCartTotals(n, s), {
        data: [],
        status: 200,
        message: "Đã hủy bỏ mã giảm giá hệ thống."
      };
    } catch (o) {
      return console.error("Lỗi remove Global Voucher:", o.message), { msg: "invalid_404", status: 400 };
    }
  }
  validateGlobalVoucher(t, e, s) {
    if (e <= 0)
      return "Giỏ hàng chưa có sản phẩm.";
    const r = Number(t.min_cost || 0);
    if (r > 0 && e < r)
      return `Đơn hàng phải đạt tối thiểu ${r.toLocaleString("vi-VN")}đ để áp dụng voucher.`;
    const o = /* @__PURE__ */ new Date(), n = new Date(t.start_date ?? ""), a = new Date(t.end_date ?? "");
    if (isNaN(n.getTime()) || isNaN(a.getTime()))
      return "Dữ liệu ngày tháng của mã giảm giá không hợp lệ.";
    if (n.setUTCHours(0, 0, 0, 0), a.setUTCHours(23, 59, 59, 999), o.getTime() < n.getTime() || o.getTime() > a.getTime())
      return "Mã giảm giá chưa đến ngày áp dụng hoặc đã hết hạn sử dụng.";
    const i = Number(t.quantity || 0), c = Number(t.quantity_used || 0);
    return i > 0 && c >= i ? "Mã giảm giá đã hết lượt sử dụng." : (Number(t.customer_number || 0), null);
  }
  async voucherMaybeApply(t) {
    const e = Number(t);
    if (e <= 0)
      throw new Error("ID khách hàng không hợp lệ.");
    const s = new U(this.pool), r = new H(this.pool);
    try {
      const o = await r.getCustomerCart(e), n = Number(o?.item_total || 0), a = o?.voucher_id || null, i = await s.getGlobalVouchersForCustomer(e), c = /* @__PURE__ */ new Date(), d = i.map((u) => {
        let m = !0, g = "Hợp lệ";
        (Number(u.status) !== 1 || Number(u.is_deleted) === 1) && (m = !1, g = "Voucher không hoạt động.");
        const I = new Date(u.start_date ?? ""), _ = new Date(u.end_date ?? "");
        I.setUTCHours(0, 0, 0, 0), _.setUTCHours(23, 59, 59, 999), m && (isNaN(I.getTime()) || isNaN(_.getTime()) || c.getTime() < I.getTime() || c.getTime() > _.getTime()) && (m = !1, g = "Đã hết hạn hoặc chưa đến ngày áp dụng.");
        const w = Number(u.quantity || 0), E = Number(u.quantity_used || 0);
        m && w > 0 && E >= w && (m = !1, g = "Đã hết lượt sử dụng.");
        const D = Number(u.min_cost || 0);
        m && D > 0 && n < D && (m = !1, g = `Thiếu ${D.toLocaleString("vi-VN")}đ để áp dụng.`);
        const S = this.calculateMaxDiscount(u, n);
        let N = m;
        return a && Number(u.id) === a && (N = {
          ...u,
          discount_value: S,
          status: u.status
        }), {
          ...u,
          discount_value: S,
          verified: N,
          validation_message: g
        };
      }), l = d.find((u) => Number(u.id) === a);
      return {
        status: 200,
        data: {
          voucher_id: l ? l.id : null,
          list: d
        }
      };
    } catch (o) {
      throw console.error("Lỗi khi lấy danh sách voucher:", o), new Error("Không thể lấy danh sách voucher hiện tại.");
    }
  }
  async getVoucherListForProfile(t) {
    const e = Number(t);
    if (e <= 0) return { status: 400, msg: "invalid_404" };
    const s = new U(this.pool), r = /* @__PURE__ */ new Date();
    try {
      return { status: 200, data: (await s.getGlobalVouchersForCustomer(e)).map((a) => {
        const i = new Date(a.start_date ?? ""), c = new Date(a.end_date ?? ""), d = r > c, l = r < i, u = Number(a.quantity || 0), m = Number(a.quantity_used || 0), g = u > 0 && m >= u;
        return {
          id: a.id,
          code: a.code,
          name: a.name,
          discount_display: a.discount_type === "P" ? `Giảm ${a.discount}%` : `Giảm ${Number(a.discount || 0).toLocaleString("vi-VN")} đ`,
          condition_display: `cho đơn từ ${Number(a.min_cost || 0).toLocaleString("vi-VN")} đ`,
          max_discount_display: a.discount_type === "P" && a.cost_limit ? `tối đa ${Number(a.cost_limit).toLocaleString("vi-VN")} đ` : null,
          start_date: a.start_date,
          end_date: a.end_date,
          is_available: Number(a.status) === 1 && !g
        };
      }) };
    } catch {
      return { status: 400, msg: "invalid_404" };
    }
  }
  async getGlobalVouchersForCustomer(t) {
    const a = `
            SELECT 
                id, name, description, image, code, tier_id, quantity, quantity_used, customer_number,
                voucher_type, discount_type, discount, min_cost, cost_limit, date_type, 
                start_date, end_date, start_time, end_time, day_of_week, 
                status, used, created_at, updated_at, created_by, updated_by, is_deleted
            FROM 
                vouchers 
            WHERE 
                (voucher_type = ? OR voucher_type = ?)
                AND status = ? 
                AND is_deleted = ? 
                AND end_date >= NOW()
                -- Lấy các voucher Công khai (Giả định customer_number = 0 là public)
                AND (customer_number = ? OR customer_number IS NULL) 
        `;
    try {
      const [i] = await this.query(a, [
        1,
        6,
        1,
        0,
        0
      ]);
      return i;
    } catch (i) {
      throw console.error("Lỗi truy vấn SQL getGlobalVouchersForCustomer:", i), i;
    }
  }
  calculateMaxDiscount(t, e) {
    const s = Number(t.discount || 0), r = Number(t.cost_limit || 0);
    if (t.discount_type === "P") {
      let o = e * (s / 100);
      return r > 0 && o > r && (o = r), Math.round(o);
    } else if (t.discount_type === "F" || t.discount_type === "S")
      return s > e && t.discount_type !== "S" ? Math.round(e) : Math.round(s);
    return 0;
  }
  calculateCtmValues(t, e) {
    const s = Number(t.discount_value || 0);
    if (s <= 0 || !e || e.length === 0)
      return {};
    const r = e.reduce((c, d) => {
      const l = Number(d.store_subtotal || d.total || 0);
      return c + l;
    }, 0);
    if (r <= 0)
      return {};
    const o = {};
    let n = 0;
    for (const c of e) {
      const d = c.store_id.toString(), m = Number(c.store_subtotal || c.total || 0) / r * s;
      o[d] = m, n += m;
    }
    const a = s - n;
    if (e.length > 0) {
      const c = e[0].store_id.toString();
      o[c] = Number(o[c]) + a;
    }
    const i = {};
    for (const c in o)
      i[c] = parseFloat(o[c].toFixed(4));
    return i;
  }
  async getApplicableVouchersList(t) {
    const s = await new U(this.pool).getGlobalVouchersForCustomer(t);
    return { list: await Promise.all(s.map(async (o) => {
      let n = !0, a = "Có thể sử dụng";
      const i = /* @__PURE__ */ new Date(), c = new Date(o.end_date ?? "");
      c.setUTCHours(23, 59, 59, 999), i.getTime() > c.getTime() && (n = !1, a = "Đã hết hạn sử dụng.");
      const d = Number(o.quantity || 0), l = Number(o.quantity_used || 0);
      n && d > 0 && l >= d && (n = !1, a = "Đã hết lượt sử dụng.");
      const u = Number(o.customer_number || 0);
      return n && u > 0 && await this.getUsedCountByCustomer(Number(o.id), t) >= u && (n = !1, a = "Bạn đã hết lượt sử dụng mã giảm giá này."), {
        ...o,
        is_usable: n,
        status_message: a
        // max_discount_value: maxDiscountValue
      };
    })) };
  }
  async getUsedCountByCustomer(t, e) {
    const s = `
        SELECT COUNT(id) AS used_count
        FROM voucher_history
        WHERE voucher_id = ? AND customer_id = ?
    `;
    try {
      const [r] = await this.query(s, [t, e]);
      return Number(r[0]?.used_count || 0);
    } catch (r) {
      return console.error("Lỗi truy vấn SQL getUsedCountByCustomer:", r), 0;
    }
  }
}
class X extends T {
  constructor() {
    super(...arguments), this.table = "voucher_store", this.vdObject = {
      store_id: "required|number",
      name: "required|minLen(2)|maxLen(128)",
      code: "required|maxLen(20)|unique(voucher_store,code)",
      voucher_type: "required|number",
      discount_type: "required|maxLen(1)",
      discount: "required|number|minVal(0)",
      min_cost: "number|minVal(0)",
      cost_limit: "number|minVal(0)",
      quantity: "number",
      customer_number: "number",
      date_type: "number",
      status: "number",
      is_deleted: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      store_id: "ID Cửa hàng",
      name: "Tên Voucher",
      description: "Mô tả",
      image: "Hình ảnh",
      code: "Mã Voucher",
      tier_id: "ID Hạng thành viên",
      quantity: "Tổng số lượng",
      quantity_used: "Số lượng đã dùng",
      customer_number: "Số lượng/Khách hàng",
      voucher_type: "Loại Voucher",
      discount_type: "Loại giảm giá",
      discount: "Giá trị giảm giá",
      min_cost: "Giá trị đơn hàng tối thiểu",
      cost_limit: "Giới hạn giảm tối đa",
      date_type: "Loại thời gian áp dụng",
      start_date: "Ngày bắt đầu",
      end_date: "Ngày kết thúc",
      start_time: "Giờ bắt đầu",
      end_time: "Giờ kết thúc",
      day_of_week: "Ngày trong tuần áp dụng",
      reason_cancel: "Lý do hủy",
      status: "Trạng thái",
      used: "Đã sử dụng",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa mềm"
    }[t] ?? t;
  }
  async getDatas(t, e = 0, s = !0) {
    const r = t.get("nameSh"), o = t.get("storeIdSh"), n = t.get("statusSh"), a = t.get("codeSh"), i = [];
    if (r) {
      const d = `%${r}%`;
      i.push(`voucher_store.name LIKE '${d}'`);
    }
    if (a) {
      const d = `%${a}%`;
      i.push(`voucher_store.code LIKE '${d}'`);
    }
    o && i.push(`voucher_store.store_id = ${Number(o)} `), n && i.push(`voucher_store.status = ${Number(n)} `), e === 0 || e === "0" ? i.push("voucher_store.is_deleted = 0") : (e === 1 || e === "1") && i.push("voucher_store.is_deleted = 1");
    const c = i.length ? i.join(" AND ") : "1";
    if (s) {
      const d = parseInt(t.get("page", "1")), l = t.get("limit"), u = parseInt(t.get("pageLen", "10")), m = l ? parseInt(l) : u, g = Math.max(1, m), I = await this.findWithPagination(
        c,
        { "voucher_store.created_at": "DESC" },
        m,
        d
      );
      return {
        page: I.page,
        pageLen: g,
        pageTotal: I.pageTotal,
        recordTotal: I.recordTotal,
        data: I.items
      };
    } else
      return await this.find(
        c,
        { "voucher_store.created_at": "DESC" },
        !1,
        void 0,
        "*"
      );
  }
  async storeVoucherMaybeApply(t, e) {
    const s = /* @__PURE__ */ new Date(), r = M.formatDate(s).split(" ")[0];
    let o = "store_id = ? AND status = ? AND is_deleted = ?";
    const n = [t, 1, 0];
    o += " AND DATE(end_date) >= ?", n.push(r);
    const a = `
        SELECT * FROM \`${this.table}\` 
        WHERE ${o}
    `, [i] = await this.query(a, n), c = i || [], d = [], u = await new H(this.pool).getStoreTotal(e, t);
    for (const m of c) {
      let g = !0;
      const I = Number(m.min_cost || 0);
      u < I && (g = !1);
      const _ = Number(m.quantity), w = Number(m.quantity_used || 0);
      g && _ !== -1 && w >= _ && (g = !1), Number(m.status) !== 1 && (g = !1);
      const E = {
        ...m,
        discount_value: this.calculateMaxDiscount(m),
        verified: g
      };
      d.push(E);
    }
    return d;
  }
  calculateMaxDiscount(t) {
    const e = Number(t.discount || 0), s = Number(t.cost_limit || 0);
    return t.discount_type === "P" ? s : e;
  }
  async cartUseStoreVoucher(t, e) {
    const s = t.getPost("voucherId"), r = t.getPost("storeId"), o = Number(e);
    if (Number(r) <= 0)
      throw new Error("invalid_404");
    const n = Number(r), a = Number(s) || 0;
    if (a <= 0)
      throw new Error("invalid_404");
    const i = new H(this.pool), c = new X(this.pool);
    try {
      const d = await i.getCustomerCart(o);
      if (!d) throw new Error("invalid_404");
      const l = d.id, u = await c.findOne({ id: a });
      if (!u || Number(u.store_id) !== n)
        throw new Error("invalid_404");
      const m = d.item_store_total, I = (m ? JSON.parse(m) : {})[n.toString()] || 0, _ = {
        ...u,
        discount_value: this.calculateMaxDiscount(u)
      }, w = d.voucher_store_id, E = w ? JSON.parse(w) : {};
      E[n] = a;
      const D = {};
      return D.voucher_store_id = JSON.stringify(E), await i.update(D, { id: l }), await i.recalculateCartTotals(l, o), {
        ..._ ? { [n]: _ } : {},
        status: 200
        // message: discountMessage
      };
    } catch (d) {
      return console.error("Lỗi khi áp dụng voucher:", d), {
        data: [],
        // status: 400,
        message: d.message || "Lỗi hệ thống khi áp dụng voucher."
      };
    }
  }
  async removeStoreVoucher(t, e) {
    const s = t.getParam("storeId"), r = t.getPost("voucherId"), o = Number(e);
    if (Number(s) <= 0)
      throw new Error("invalid_404");
    const n = Number(s), a = new H(this.pool);
    try {
      const i = await a.getCustomerCart(o);
      if (!i) throw new Error("invalid_404");
      const c = i.id, l = await new X(this.pool).findOne({ id: r });
      if (!l || Number(l.store_id) !== n || Number(l.status) !== 1)
        throw new Error("invalid_404");
      const u = i.item_store_total, m = u && u !== "[]" && u !== "{}" ? JSON.parse(u) : {}, g = String(n);
      if ((m[g] || 0) <= 0)
        throw new Error("invalid_404");
      const _ = i.voucher_store_id, w = _ ? JSON.parse(_) : {};
      if (!Object.prototype.hasOwnProperty.call(w, g))
        throw new Error("invalid_404");
      Object.prototype.hasOwnProperty.call(w, g) && delete w[g];
      const E = {};
      return E.voucher_store_id = JSON.stringify(w), await a.update(E, { id: c }), await a.recalculateCartTotals(c, o), {
        data: [],
        status: 200
        // message: discountMessage
      };
    } catch (i) {
      return console.error("Lỗi khi hủy voucher cửa hàng:", i), {
        data: [],
        status: 400,
        message: i.message || "Lỗi hệ thống khi hủy voucher."
      };
    }
  }
  async getDetailsByIds(t) {
    if (!t || t.length === 0)
      return [];
    const s = `
            SELECT 
                id, store_id, name, description, image, code, tier_id, quantity, quantity_used, customer_number,
                voucher_type, discount_type, discount, min_cost, cost_limit, date_type, 
                start_date, end_date, start_time, end_time, day_of_week, 
                status, is_deleted
                -- Thêm các trường khác nếu cần
            FROM 
                voucher_store 
            WHERE 
                id IN (${t.map(() => "?").join(", ")})
        `;
    try {
      const [r] = await this.query(s, t);
      return r;
    } catch (r) {
      throw console.error("Lỗi truy vấn SQL getDetailsByIds:", r), r;
    }
  }
}
function as(h) {
  return {
    product_id: h.product_id,
    price: Number(h.price || 0),
    expense: Number(h.expense || h.price || 0),
    package_id: h.package_id,
    product_price_id: h.product_price_id
  };
}
class H extends T {
  constructor() {
    super(...arguments), this.table = "cart", this.vdObject = {
      customer_id: "integer|min(0)",
      voucher_id: "integer|min(1)",
      voucher_store_id: "maxLen(500)",
      payment_method_id: "numeric|min(1)",
      item_total: "numeric|min(0)",
      item_store_total: "maxLen(1000)",
      ahamove_service_id: "maxLen(255)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Giỏ hàng",
      customer_id: "ID Khách hàng",
      voucher_id: "ID Voucher chung",
      voucher_store_id: "ID Voucher Cửa hàng",
      payment_method_id: "Phương thức thanh toán",
      item_total: "Tổng giá trị hàng hóa",
      item_store_total: "Tổng giá trị theo cửa hàng",
      ahamove_service_id: "Mã dịch vụ AhaMove"
    }[t] ?? t;
  }
  async getCustomerCart(t) {
    if (t <= 0)
      return null;
    const e = Number(t);
    return await this.findOne({ customer_id: e });
  }
  async getCartSummary(t) {
    if (t <= 0)
      throw new Error("invalid_customers");
    const e = Number(t), s = await this.getCustomerCart(e), o = await new pt(this.pool).getTotalProductCount(e);
    return !s || !s.id ? null : {
      cart_id: s.id,
      // item_total: currentCart.item_total || 0,
      total_quantity: o ?? 0
      // voucher_id: currentCart.voucher_id || null,
      // payment_method_id: currentCart.payment_method_id || null,
    };
  }
  async getRawCartItems(t) {
    if (!t || t <= 0)
      return [];
    const e = `
        SELECT 
            ci.*,                                      
            pp.price,                                  
            pp.package_id,
            p.image,                                    
            p.store_id                                  
        FROM 
            cart_item AS ci
        JOIN 
            product_price AS pp ON ci.product_price_id = pp.id
        JOIN
            product AS p ON ci.product_id = p.id      
        WHERE 
            ci.customer_id = ?; 
    `, [s] = await this.query(e, [t]);
    return s;
  }
  async recalculateCartTotals(t, e) {
    if (!t || !e)
      return { itemTotal: 0, itemStoreTotal: "{}", totalQuantity: 0 };
    const s = Number(e), r = await this.getRawCartItems(s), o = { id: s }, n = await this.calculateFinalCartItems(r, o);
    let a = 0;
    const i = {};
    let c = 0;
    n && n.length > 0 && n.forEach((l) => {
      if (l.is_order !== 1)
        return l.is_order === 0 || l.is_order === null || l.is_order === void 0, void 0;
      const m = Number(l.final_unit_price || 0), g = Number(l.quantity || 0), I = Number(l.seller_id || 0), _ = m * g;
      _ > 0 && (a += _, i[I] = (i[I] || 0) + _), c += g;
    });
    const d = {
      item_total: a,
      item_store_total: JSON.stringify(i)
    };
    return await this.update(d, { id: t }), {
      itemTotal: a,
      itemStoreTotal: JSON.stringify(i),
      totalQuantity: c
    };
  }
  async calculateFinalCartItems(t, e) {
    const s = new R(this.pool);
    return await Promise.all(
      t.map(async (o) => {
        const n = as(o), a = await s.getCalculatedSinglePrice(n, e);
        return {
          ...o,
          final_unit_price: a?.expense,
          store_id: a?.store_id
        };
      })
    );
  }
  async findById(t) {
    return t ? this.findOne({ id: t }) : null;
  }
  async getDatas(t) {
    const e = t.get("customerIdSh"), s = t.get("voucherIdSh"), r = [];
    e && r.push(`cart.customer_id = ${Number(e)}`), s && r.push(`cart.voucher_id = ${Number(s)}`);
    const o = t.get("minTotalSh");
    o && r.push(`cart.item_total >= ${Number(o)}`);
    const n = r.length ? r.join(" AND ") : "1", a = parseInt(t.get("page", "1")), i = parseInt(t.get("pageLen", "10")), c = Math.max(1, i), d = await this.findWithPagination(
      n,
      { "cart.id": "DESC" },
      a,
      c
    );
    return {
      page: d.page,
      pageLen: c,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
  async getStoreTotal(t, e) {
    const r = await this.query(`
        SELECT SUM(ci.quantity * pp.price) AS total
        FROM cart_item ci
        JOIN product_price pp ON ci.product_price_id = pp.id
        WHERE ci.customer_id = ? AND ci.seller_id = ? AND ci.is_order = 1
    `, [t, e]);
    if (r && r[0] && r[0][0]) {
      const o = r[0][0].total;
      return Number(o || 0);
    }
    return r && r.length > 0 ? Number(r[0].total || 0) : 0;
  }
  async calculateSummary(t) {
    const e = await this.getCustomerCart(t);
    if (!e) return { itemTotal: 0, totalDiscount: 0, finalTotal: 0 };
    const s = Number(e.item_total || 0);
    let r = 0, o = 0, n = 0;
    if (e.voucher_id) {
      const a = await new U(this.pool).findOne({ id: e.voucher_id });
      a && (o = new U(this.pool).calculateMaxDiscount(a, s));
    }
    if (e.voucher_store_id) {
      const a = JSON.parse(e.voucher_store_id), i = e.item_store_total ? JSON.parse(e.item_store_total) : {};
      for (const c in a) {
        const d = a[c];
        if (d > 0) {
          const l = await new X(this.pool).findOne({ id: d });
          l && (n += new U(this.pool).calculateMaxDiscount(l, i[c] || 0));
        }
      }
    }
    return r = o + n, {
      itemTotal: s,
      shippingFee: 0,
      totalDiscount: r,
      finalTotal: Math.max(0, s - r)
    };
  }
}
class gt extends T {
  constructor() {
    super(...arguments), this.table = "stores", this.vdObject = {
      alias: "required|minLen(2)|maxLen(250)|unique(stores,alias)",
      name: "required|minLen(2)|maxLen(200)",
      email: "email|maxLen(150)",
      phone: "maxLen(50)",
      ctm_discount: "number|minVal(0)|maxVal(100)",
      lat: "number",
      lng: "number",
      status: "number",
      is_deleted: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      alias: "Đường dẫn (Alias)",
      register_id: "ID Đăng ký",
      ctm_discount: "Chiết khấu Khách hàng",
      name: "Tên cửa hàng",
      des: "Mô tả ngắn",
      activity: "Lĩnh vực hoạt động",
      phone: "Số điện thoại",
      telephone: "Điện thoại bàn",
      country_id: "Quốc gia",
      province_id: "Tỉnh/Thành phố",
      district_id: "Quận/Huyện",
      ward_id: "Phường/Xã",
      address: "Địa chỉ chi tiết",
      fulladdress: "Địa chỉ đầy đủ",
      lat: "Vĩ độ",
      lng: "Kinh độ",
      image: "Hình ảnh",
      email: "Email",
      review_total: "Tổng đánh giá",
      review_point_1: "Điểm 1 sao",
      review_point_2: "Điểm 2 sao",
      review_point_3: "Điểm 3 sao",
      review_point_4: "Điểm 4 sao",
      review_point_5: "Điểm 5 sao",
      review_point: "Điểm đánh giá trung bình",
      status: "Trạng thái",
      is_deleted: "Đã xóa mềm",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e = 0) {
    const s = t.get("nameSh"), r = t.get("statusSh"), o = t.get("phoneSh"), n = t.get("aliasSh") || t.get("alias"), a = [];
    if (n && a.push(`product.alias = '${n}'`), s) {
      const u = `%${s}%`;
      a.push(`stores.name LIKE '${u}'`);
    }
    o && a.push(`stores.phone LIKE '%${o}%'`), r && a.push(`stores.status = ${Number(r)} `), e === 0 || e === "0" ? a.push("stores.is_deleted = 0") : (e === 1 || e === "1") && a.push("stores.is_deleted = 1");
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "stores.created_at": "DESC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
  async getStoreByAlias(t) {
    if (!t) return null;
    const e = {
      alias: t,
      status: 1,
      is_deleted: 0
    };
    return await this.findOne(e);
  }
  async getStoreIdByAlias(t) {
    const e = await this.findOne({ alias: t, status: 1, is_deleted: 0 });
    return e?.id ? Number(e.id) : null;
  }
  async getStoreNamesByIds(t) {
    if (!t.length) return /* @__PURE__ */ new Map();
    const e = "SELECT id, name FROM stores WHERE id IN (?)", [s] = await this.query(e, [t]), r = /* @__PURE__ */ new Map();
    return s.forEach((o) => {
      r.set(o.id, o.name);
    }), r;
  }
  async getProductListByStore(t, e, s, r) {
    if (!r || typeof r != "string" || r.length === 0)
      throw new Error("invalid_store_alias");
    const o = await this.getStoreIdByAlias(r);
    if (!o || o <= 0)
      return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
    const n = String(o), a = {
      ...t,
      get: (d, l) => d === "store_idSh" || d === "store_id" ? n : d === "aliasSh" || d === "alias" ? null : t.get(d, l)
    };
    return await new R(this.pool).getData(
      a,
      e,
      s
    );
  }
  async getProductListByStoreId(t, e, s, r) {
    if (r <= 0)
      return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
    const o = String(r), n = {
      ...t,
      get: (c, d) => c === "store_idSh" || c === "store_id" ? o : c === "aliasSh" || c === "alias" ? null : t.get(c, d)
    };
    return await new R(this.pool).getData(
      n,
      e,
      s
    );
  }
  async getStoreDetailsByIds(t) {
    if (!t || t.length === 0)
      return /* @__PURE__ */ new Map();
    const s = `
            SELECT * FROM stores 
            WHERE id IN (${t.map(() => "?").join(",")})
        `, [r] = await this.query(s, t), o = /* @__PURE__ */ new Map();
    return r && r.length > 0 && r.forEach((n) => {
      n.id && o.set(n.id, n);
    }), o;
  }
}
class pt extends T {
  constructor() {
    super(...arguments), this.table = "cart_item", this.vdObject = {
      customer_id: "integer|min(0)",
      product_id: "required|integer|min(1)",
      product_price_id: "required|integer|min(1)",
      seller_id: "integer|min(1)",
      product_seller_id: "integer|min(1)",
      quantity: "required|integer|min(1)",
      is_order: "numeric|min(0)|max(1)",
      created_at: "date",
      updated_at: "date"
    };
  }
  fieldName(t) {
    return {
      id: "ID Chi tiết Giỏ hàng",
      customer_id: "ID Khách hàng",
      product_id: "ID Sản phẩm",
      product_price_id: "ID Giá sản phẩm",
      seller_id: "ID Người bán",
      product_seller_id: "ID Sản phẩm/Người bán",
      quantity: "Số lượng",
      is_order: "Đã đặt hàng",
      created_at: "Ngày thêm vào",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getItemsByCustomer(t, e) {
    const s = e && e.customer_id ? e.customer_id : 0;
    if (s <= 0)
      return [];
    const r = `cart_item.customer_id = ${s} AND cart_item.is_order = 0`;
    return await this.find(
      r,
      { "cart_item.created_at": "ASC" }
    );
  }
  async getTotalProductCount(t) {
    const e = `
        SELECT COUNT(id) AS total_products
        FROM cart_item
        WHERE customer_id = ? 
    `, [s] = await this.query(e, [t]);
    return s && s.length > 0 && s[0].total_products !== null ? Number(s[0].total_products) : 0;
  }
  async getDatas(t, e, s = 0) {
    const r = Number(e);
    if (r <= 0)
      return { page: 1, pageLen: 10, pageTotal: 0, recordTotal: 0, data: [] };
    const o = t.get("productIdSh"), n = [];
    n.push(`cart_item.customer_id = ${r}`), o && n.push(`cart_item.product_id = ${Number(o)}`);
    const a = String(s);
    a === "0" || a === "false" ? n.push("cart_item.is_order = 0") : (a === "1" || a === "true") && n.push("cart_item.is_order = 1");
    const i = n.length ? n.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = Math.max(1, d), u = await this.findWithPagination(
      i,
      { "cart_item.created_at": "DESC" },
      c,
      l
    ), m = u.items, g = m.map((p) => p.product_price_id).filter((p) => p), I = new R(this.pool), _ = m.map((p) => p.product_id), w = Array.from(new Set(_)).filter((p) => p != null), E = await I.getCalculatedMultiPrices(
      g,
      { id: r }
    ), D = new Map(E.map((p) => [p.id, p])), S = await I.getMultiProductDetails(w), N = m.map((p) => {
      const f = D.get(p.product_price_id), P = S.get(p.product_id), q = f?.expense ?? 0, v = q * (p.quantity || 0), L = {
        ...P || {},
        ...f,
        id: p.product_id
      };
      return {
        ...p,
        store_id: P?.store_id,
        package_name: f?.packageName,
        price: f?.price,
        image: f?.image,
        expense: q,
        total: v,
        // product_name: priceDetail?.productName,
        product: L
      };
    }), y = N.map((p) => p.store_id), A = Array.from(new Set(y)).filter((p) => p != null), b = await new gt(this.pool).getStoreNamesByIds(A), C = {};
    N.forEach((p) => {
      const f = p.store_id;
      if (f) {
        if (!C[f]) {
          const P = b.get(f) || `Cửa hàng ID ${f}`;
          C[f] = {
            seller_id: f,
            store_id: f,
            store_name: P,
            item_count: 0,
            items: []
          };
        }
        C[f].item_count += 1, C[f].items.push(p);
      }
    });
    const k = Object.values(C);
    return {
      page: u.page,
      pageLen: l,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: k
    };
  }
  async UpdateCart(t, e) {
    const s = t.getPost("product_id"), r = t.getPost("product_price_id"), o = t.getPost("quantity", 0), n = t.getPost("product_seller_id", 0), a = new H(this.pool), i = new R(this.pool), c = new tt(this.pool), d = new U(this.pool), l = new X(this.pool), u = new gt(this.pool), m = Number(e), g = Number(s), I = Number(r), _ = Number(o);
    if (!g || !I || _ < 0 || m <= 0)
      return { success: !1, message: "Dữ liệu sản phẩm hoặc khách hàng không hợp lệ.", cart: null, data: null, status: 400 };
    try {
      const w = await i.findById(g);
      if (!w || w.is_deleted === 1)
        throw new Error("invalid_404");
      const E = await c.findOne({ id: I });
      if (!E)
        throw new Error("invalid_404");
      const D = Number(E.remaining_quantity || 0), S = w.name;
      let N = 0;
      w && w.store_id && (N = Number(w.store_id));
      const y = N, A = n || N, x = /* @__PURE__ */ new Date(), b = M.formatDate(x);
      let C = await a.getCustomerCart(m);
      if (!C) {
        const F = { customer_id: m, item_total: 0 }, G = await a.insert(F);
        if (C = await a.findById(G), !C) throw new Error("Không thể tạo giỏ hàng mới.");
      }
      const k = await this.findOne({
        customer_id: m,
        product_id: g,
        product_price_id: I,
        seller_id: y,
        product_seller_id: A
      });
      if (_ > 0 && D !== -1) {
        if (D === 0)
          throw new Error(`Sản phẩm '${S}' đã hết hàng.`);
        if (_ > D)
          throw new Error(`Sản phẩm '${S}' chỉ còn ${D} đơn vị. Không thể đặt ${_} nữa.`);
      }
      if (_ === 0)
        k && await this.deleteOne({ id: k.id });
      else if (k) {
        const F = { quantity: _, updated_at: b }, G = { id: k.id };
        await this.update(F, G);
      } else {
        const F = {
          customer_id: m,
          product_id: g,
          product_price_id: I,
          quantity: _,
          seller_id: y,
          product_seller_id: A,
          is_order: 1,
          created_at: b,
          updated_at: b
        };
        await this.insert(F);
      }
      C && C.id && await a.recalculateCartTotals(C.id, m), C = await a.getCustomerCart(m);
      const p = await this.getDatas(t, m, null), f = p.data.flatMap((F) => {
        const G = Number(F.store_id);
        return F.items.map((Y) => ({
          ...Y,
          store_id: G,
          product: Y.product ? {
            ...Y.product,
            store_id: G
          } : null
        }));
      }), P = p.data.map((F) => F.store_id), q = await u.getStoreDetailsByIds(P), v = C?.item_total || 0;
      let L = null, O = 0;
      const $ = C?.voucher_id || null;
      if ($) {
        const F = await d.findOne({ id: $ });
        if (F) {
          const G = d.calculateMaxDiscount(F, v), Y = d.calculateCtmValues({ discount_value: G }, p.data);
          L = {
            ...F,
            discount_value: G,
            ctmValues: Y
          }, O = G;
        }
      }
      const V = C?.voucher_store_id, W = {};
      let wt = 0;
      if (V)
        try {
          const F = JSON.parse(V), G = Object.values(F).filter((Y) => Y > 0);
          if (G.length > 0) {
            const Y = await l.getDetailsByIds(G), Rt = new Map(Y.map((ut) => [ut.id, ut])), Bt = C?.item_store_total ? JSON.parse(C.item_store_total) : {};
            for (const ut in F) {
              const ae = F[ut], jt = Rt.get(ae), Ce = Bt[ut] || 0;
              if (ae > 0 && jt) {
                const ne = d.calculateMaxDiscount(jt, Ce);
                W[ut] = {
                  ...jt,
                  discount_value: ne
                }, wt += ne;
              }
            }
          }
        } catch (F) {
          console.error("Lỗi xử lý store voucher trong UpdateCart:", F);
        }
      const bt = p.data.reduce((F, G) => {
        const Y = G.store_id, Rt = q.get(Y) || {};
        return F[Y] = {
          ...Rt,
          store_id: Y,
          items: f.filter((Bt) => Bt.store_id === Y)
        }, F;
      }, {}), et = O + wt, yt = Math.max(0, v - et);
      return {
        success: !0,
        message: "Cập nhật giỏ hàng thành công.",
        ...{
          list: f,
          stores: bt,
          itemTotal: v,
          totalDiscount: et,
          finalTotal: yt,
          storeVouchers: W,
          voucher: L || null
        },
        status: 200
      };
    } catch (w) {
      return console.error("Lỗi khi cập nhật giỏ hàng:", w), { success: !1, message: w.message || "Lỗi hệ thống.", status: 500 };
    }
  }
  async toggleCartItemsSelection(t, e, s) {
    if (!e.length || t <= 0)
      throw new Error("Dữ liệu đầu vào không hợp lệ hoặc chưa đăng nhập.");
    const r = `
        UPDATE cart_item 
        SET 
            is_order = ?,
            updated_at = NOW() 
        WHERE customer_id = ? 
        AND id IN (?)
    `, o = [s, t, e];
    await this.query(r, o);
    const n = new H(this.pool), a = await n.getCustomerCart(t);
    a && a.id && await n.recalculateCartTotals(a.id, t);
  }
}
class at extends ot {
  constructor() {
    super(...arguments), this.md = this.models.cartItem;
  }
  async UpdateCart(t) {
    try {
      const e = Number(this.customerId || t);
      if (!e) throw new Error("invalid_customer_id");
      const s = await this.md.UpdateCart(
        this.request,
        e
      );
      this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async CartCountProduct(t, e) {
    try {
      const s = new H(this.pool), r = this.customerId, o = await s.getCartSummary(r);
      if (!o)
        return this.resJsonData({ total_quantity: 0, item_total: 0, message: "Giỏ hàng rỗng." });
      this.resJsonData(o);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
  async getCartItems() {
    try {
      const t = await this.md.getItemsByCustomer(this.request, this.customer);
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách sản phẩm trong giỏ hàng.");
    }
  }
  async getDetail(t, e) {
    try {
      const s = Number(this.customerId || e);
      if (!s) throw new Error("invalid_customer_id");
      const r = new pt(this.pool), o = new H(this.pool), n = new U(this.pool), a = new X(this.pool), i = new gt(this.pool), c = await r.getDatas(this.request, s, null), d = await o.getCustomerCart(s);
      if (!d || !d.id)
        return this.resJsonData({
          list: [],
          stores: {},
          itemTotal: 0,
          storeVouchers: {},
          voucher: null,
          message: "Giỏ hàng rỗng."
        });
      const l = d.item_total || 0, u = c.data.flatMap((b) => {
        const C = Number(b.store_id);
        return b.items.map((k) => ({
          ...k,
          store_id: C,
          product: k.product ? {
            ...k.product,
            store_id: C
          } : null
        }));
      });
      let m = null, g = 0;
      const I = d.voucher_id || null;
      if (I) {
        const b = await n.findOne({ id: I });
        if (b) {
          const C = n.calculateMaxDiscount(b, l), k = n.calculateCtmValues({ discount_value: C }, c.data);
          m = { ...b, discount_value: C, ctmValues: k }, g = C;
        }
      }
      const _ = d.voucher_store_id, w = {};
      let E = 0;
      if (_)
        try {
          const b = JSON.parse(_), C = Object.values(b).filter((k) => k > 0);
          if (C.length > 0) {
            const k = await a.getDetailsByIds(C), p = new Map(k.map((P) => [P.id, P])), f = d.item_store_total ? JSON.parse(d.item_store_total) : {};
            for (const P in b) {
              const q = b[P], v = p.get(q);
              if (q > 0 && v) {
                const L = f[P] || 0, O = n.calculateMaxDiscount(v, L);
                w[P] = { ...v, discount_value: O }, E += O;
              }
            }
          }
        } catch (b) {
          console.error("Lỗi xử lý voucher store", b);
        }
      const D = c.data.map((b) => b.store_id), S = await i.getStoreDetailsByIds(D), N = c.data.reduce((b, C) => {
        const k = C.store_id, p = S.get(k) || {};
        return b[k] = {
          ...p,
          store_id: k,
          items: u.filter((f) => f.store_id === k)
        }, b;
      }, {}), y = g + E, A = Math.max(0, l - y), x = {
        list: u,
        stores: N,
        itemTotal: l,
        totalDiscount: y,
        finalTotal: A,
        storeVouchers: w,
        voucher: m || null
      };
      return this.resJsonData(x);
    } catch (s) {
      return this.resJsonErr(s.message);
    }
  }
  async CartRemoveProduct(t, e) {
    try {
      const s = Number(this.customerId || e);
      if (!s) throw new Error("invalid_customer_id");
      const r = await this.request.getPost("cartItemIds", [], "ids");
      if (s <= 0 || !r.length)
        throw new Error("Dữ liệu không hợp lệ");
      const o = new pt(this.pool), n = new H(this.pool), a = new U(this.pool), i = new X(this.pool), c = new gt(this.pool);
      let d = 0;
      for (const p of r)
        try {
          const f = { id: p, customer_id: s };
          if (!await o.findOne(f)) continue;
          await o.deleteOne(f), d++;
        } catch (f) {
          console.error(`Lỗi xóa item ID ${p}:`, f.message);
        }
      if (d === 0)
        throw new Error("invalid_404");
      const l = await n.getCustomerCart(s);
      l && l.id && await n.recalculateCartTotals(l.id, s);
      const u = await o.getDatas(this.request, s, null), m = await n.getCustomerCart(s);
      if (!m || u.data.length === 0) {
        const p = {
          list: [],
          stores: {},
          itemTotal: 0,
          totalDiscount: 0,
          finalTotal: 0,
          storeVouchers: {},
          voucher: null,
          message: `Đã xóa thành công ${d} mặt hàng. Giỏ hàng hiện tại rỗng.`
        };
        return this.resJsonData(p);
      }
      const g = m.item_total || 0, I = u.data.flatMap((p) => {
        const f = Number(p.store_id);
        return p.items.map((P) => ({
          ...P,
          store_id: f,
          product: P.product ? {
            ...P.product,
            store_id: f
          } : null
        }));
      }), _ = u.data.map((p) => p.store_id), w = await c.getStoreDetailsByIds(_);
      let E = null, D = 0;
      const S = m.voucher_id || null;
      if (S) {
        const p = await a.findOne({ id: S });
        if (p) {
          const f = a.calculateMaxDiscount(p, g), P = a.calculateCtmValues({ discount_value: f }, u.data);
          E = {
            ...p,
            discount_value: f,
            ctmValues: P
          }, D = f;
        }
      }
      const N = m.voucher_store_id, y = {};
      let A = 0;
      if (N)
        try {
          const p = JSON.parse(N), f = Object.values(p).filter((P) => P > 0);
          if (f.length > 0) {
            const P = await i.getDetailsByIds(f), q = new Map(P.map((L) => [L.id, L])), v = m.item_store_total ? JSON.parse(m.item_store_total) : {};
            for (const L in p) {
              const O = p[L], $ = q.get(O), V = v[L] || 0;
              if (O > 0 && $) {
                const W = a.calculateMaxDiscount($, V);
                y[L] = {
                  ...$,
                  discount_value: W
                }, A += W;
              }
            }
          }
        } catch (p) {
          console.error("Lỗi xử lý store voucher trong CartRemoveProduct:", p);
        }
      const x = u.data.reduce((p, f) => {
        const P = f.store_id, q = w.get(P) || {};
        return p[P] = {
          ...q,
          store_id: P,
          items: I.filter((v) => v.store_id === P)
        }, p;
      }, {}), b = D + A, C = Math.max(0, g - b), k = {
        list: I,
        stores: x,
        itemTotal: g,
        totalDiscount: b,
        finalTotal: C,
        storeVouchers: y,
        voucher: E || null,
        message: `Đã xóa thành công ${d} mặt hàng.`
      };
      return this.resJsonData(k);
    } catch (s) {
      return this.resJsonErr(s.message);
    }
  }
  async toggleSelectionStatus(t, e) {
    try {
      const s = Number(this.customerId || e);
      if (!s) throw new Error("invalid_customer_id");
      const r = await this.request.getPost("cartItemIds", [], "ids"), o = Number(this.request.getPost("isOrder", 0));
      if (s <= 0 || !r.length || o !== 0 && o !== 1)
        throw new Error("invalid_404");
      const n = new pt(this.pool), a = new H(this.pool), i = new U(this.pool), c = new X(this.pool), d = new gt(this.pool);
      for (const p of r)
        if (!await n.findOne({ id: p, customer_id: s })) throw new Error("invalid_404");
      await n.toggleCartItemsSelection(
        s,
        r,
        o
      );
      const l = await a.getCustomerCart(s);
      l && l.id && await a.recalculateCartTotals(l.id, s);
      const u = await n.getDatas(this.request, s, null), m = await a.getCustomerCart(s);
      if (!m || u.data.length === 0)
        return this.resJsonData({
          list: [],
          stores: {},
          itemTotal: 0,
          totalDiscount: 0,
          finalTotal: 0,
          storeVouchers: {},
          voucher: null
        });
      const g = m.item_total || 0, I = u.data.flatMap((p) => {
        const f = Number(p.store_id);
        return p.items.map((P) => ({
          ...P,
          store_id: f,
          product: P.product ? {
            ...P.product,
            store_id: f
          } : null
        }));
      });
      let _ = null, w = 0;
      const E = m.voucher_id || null;
      if (E) {
        const p = await i.findOne({ id: E });
        if (p) {
          const f = i.calculateMaxDiscount(p, g), P = i.calculateCtmValues({ discount_value: f }, u.data);
          _ = {
            ...p,
            discount_value: f,
            ctmValues: P
          }, w = f;
        }
      }
      const D = m.voucher_store_id, S = {};
      let N = 0;
      if (D)
        try {
          const p = JSON.parse(D), f = Object.values(p).filter((P) => P > 0);
          if (f.length > 0) {
            const P = await c.getDetailsByIds(f), q = new Map(P.map((L) => [L.id, L])), v = m.item_store_total ? JSON.parse(m.item_store_total) : {};
            for (const L in p) {
              const O = p[L], $ = q.get(O), V = v[L] || 0;
              if (O > 0 && $) {
                const W = i.calculateMaxDiscount($, V);
                S[L] = {
                  ...$,
                  discount_value: W
                }, N += W;
              }
            }
          }
        } catch (p) {
          console.error("Lỗi xử lý store voucher trong toggleSelectionStatus:", p);
        }
      const y = u.data.map((p) => p.store_id), A = await d.getStoreDetailsByIds(y), x = u.data.reduce((p, f) => {
        const P = f.store_id, q = A.get(P) || {};
        return p[P] = {
          ...q,
          store_id: P,
          items: I.filter((v) => v.store_id === P)
        }, p;
      }, {}), b = w + N, C = Math.max(0, g - b), k = {
        list: I,
        stores: x,
        itemTotal: g,
        totalDiscount: b,
        finalTotal: C,
        storeVouchers: S,
        voucher: _ || null
      };
      return this.resJsonData(k);
    } catch (s) {
      return this.resJsonErr(s.message);
    }
  }
  async getCartSummary(t, e) {
    try {
      const s = Number(this.customerId || e);
      if (!s) throw new Error("invalid_customer_id");
      const o = await new H(this.pool).calculateSummary(s);
      return this.resJsonData(o);
    } catch (s) {
      return this.resJsonErr(s.message);
    }
  }
}
class ns extends ot {
  async getList() {
    try {
      const t = new pt(this.pool), e = Number(this.customerId || 0);
      if (!e) throw new Error("invalid_customer_id");
      const s = await t.getDatas(
        this.request,
        e,
        0
      );
      this.resJsonData(s);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class ht extends T {
  constructor() {
    super(...arguments), this.table = "customer_address", this.vdObject = {
      customer_id: "required|integer",
      name: "maxLen(100)",
      phone: "maxLen(50)",
      address: "maxLen(255)",
      country_id: "",
      province_id: "",
      district_id: "",
      ward_id: "",
      fulladdress: "",
      is_deleted: "integer",
      status: "integer",
      created_at: "",
      updated_at: ""
    };
  }
  fieldName(t) {
    return {
      customer_id: "Khách hàng",
      name: "Tên người nhận",
      phone: "Số điện thoại",
      address: "Địa chỉ",
      country_id: "Quốc gia",
      province_id: "Tỉnh/Thành phố",
      district_id: "Quận/Huyện",
      ward_id: "Phường/Xã",
      fulladdress: "Địa chỉ đầy đủ",
      is_deleted: "Đã xóa",
      status: "Trạng thái",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("customerSh"), o = t.get("statusSh"), n = [];
    if (r) {
      const l = `%${M.removeVietnameseTones(r)}%`;
      n.push(`customers.fullname LIKE '${l}'`);
    }
    o && n.push(`customer_address.status = ${Number(o)}`), (s === !0 || s === 0 || s === "true") && n.push("customer_address.is_deleted = 0");
    const a = n.length ? n.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), d = await this.findWithPagination(
      a,
      { "customer_address.created_at": "DESC" },
      i,
      c,
      "LEFT JOIN customers ON customer_address.customer_id = customers.id",
      "customer_address.*, customers.fullname AS customerName, customers.email AS customerEmail"
    );
    return {
      page: d.page,
      pageLen: d.length,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
}
class qt extends T {
  constructor() {
    super(...arguments), this.table = "customers", this.vdObject = {
      fullname: "required|minLen(2)|maxLen(250)",
      username: "required|minLen(2)|unique(customers,username)",
      email: "email|unique(customers,email)",
      phone: "maxLen(20)"
    }, this.validateRegister = {
      // username: 'required|maxLen(100)|unique(customers,username)',
      // email: 'required|unique(customers,email)|email',
      phone: "maxLen(20)|unique(customers,phone)|phoneVn"
    }, this.validateLogin = {
      phone: "maxLen(20)|required|phoneVn",
      password: "required|password"
    }, this.validatePassword = {
      password: "required|password"
    }, this.validateForgetPassowrd = {
      // email: 'required|maxLen(150)',
      phone: "maxLen(20)|unique(customers,phone)|phoneVn",
      referenceCode: "required",
      password: "required|password"
    }, this.validateProfile = {
      fullname: "required|minLen(2)|maxLen(250)",
      email: "required|email|unique(customers,email)",
      phone: "maxLen(20)",
      address: "maxLen(255)"
    };
  }
  fieldName(t) {
    return {
      tier_id: "Hạng thành viên",
      point: "Điểm tích lũy",
      point_used: "Điểm đã dùng",
      referral_code: "Mã giới thiệu",
      fullname: "Họ & tên",
      phone: "Số điện thoại",
      email: "Email",
      address_id: "Địa chỉ ID",
      country_id: "Quốc gia",
      province_id: "Tỉnh/Thành phố",
      district_id: "Quận/Huyện",
      ward_id: "Phường/Xã",
      address: "Số nhà, tên đường",
      fulladdress: "Địa chỉ đầy đủ",
      gender: "Giới tính",
      birthday: "Ngày sinh",
      username: "Tên đăng nhập",
      change_username: "Đổi tên đăng nhập",
      password: "Mật khẩu",
      facebook_id: "Facebook ID",
      google_id: "Google ID",
      apple_id: "Apple ID",
      avatar: "Ảnh đại diện",
      cnote: "Ghi chú",
      status: "Trạng thái",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      is_deleted: "Đã xóa"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("emailSh"), n = t.get("phoneSh"), a = t.get("statusSh"), i = [];
    if (r) {
      const m = `%${r}%`;
      i.push(`(customers.fullname LIKE '${m}' OR customers.username LIKE '${m}')`);
    }
    if (o) {
      const m = `% ${o}% `;
      i.push(`customers.email LIKE '${m}'`);
    }
    if (n) {
      const m = `% ${n}% `;
      i.push(`customers.phone LIKE '${m}'`);
    }
    a && i.push(`customers.status = ${Number(a)} `), (s === !0 || s === 0 || s === "true") && i.push("customers.is_deleted = 0");
    const c = i.length ? i.join(" AND ") : "1", d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      c,
      { "customers.created_at": "DESC" },
      d,
      l
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class ct extends ot {
  async getAddresses() {
    const t = this.customerId, e = new ht(this.pool), s = `customer_id = ${t} AND is_deleted = 0 AND status = 1`, o = await e.find(
      s,
      {
        // is_default: 'DESC',
        created_at: "DESC"
      },
      1e4
    );
    this.resJsonData(o);
  }
  async updateAddress() {
    try {
      if (!this.request.isPost())
        throw new Error("invalid_post_403");
      const t = this.customer.id, e = this.request.getParam("id"), s = {
        id: e ? Number(e) : void 0,
        customer_id: t,
        name: this.request.getPost("name"),
        phone: this.request.getPost("phone"),
        address: this.request.getPost("address"),
        country_id: this.request.getPost("country_id"),
        province_id: this.request.getPost("province_id"),
        district_id: this.request.getPost("district_id"),
        ward_id: this.request.getPost("ward_id"),
        fulladdress: this.request.getPost("fulladdress"),
        // is_default: this.request.getPost('is_default', 0), 
        is_deleted: 0,
        status: 1
      }, r = new ht(this.pool);
      s.status === 1 && await r.update(
        { customer_id: t },
        { status: 0 }
      );
      const o = await r.vdSave(s);
      if (!o)
        throw new Error("Lỗi khi lưu hoặc cập nhật địa chỉ.");
      this.resJsonData(o);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getAddressDetail() {
    try {
      const t = this.request.getParam("addressId"), e = this.customerId;
      if (!t)
        throw new Error("address_id_required");
      const r = await new ht(this.pool).findOne({
        id: t,
        customer_id: e,
        is_deleted: 0
      });
      if (!r) {
        this.resJsonErr("Địa chỉ không tồn tại hoặc không thuộc về bạn.");
        return;
      }
      this.resJsonData(r);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async removeAddress() {
    try {
      const t = this.request.getParam("addressId"), e = Number(t), s = this.customer.id;
      if (!e || e === 0)
        throw new Error("address_id_required");
      const r = new ht(this.pool), o = new qt(this.pool), n = await r.findOne({
        id: e,
        customer_id: s,
        is_deleted: 0
      });
      if (!n)
        throw new Error("invalid_404");
      n.is_deleted = 1, await r.vdSave(n);
      const a = await o.findOne({ id: s });
      if (a && a.address_id === e) {
        const i = await r.findOne({
          customer_id: s,
          is_deleted: 0
        });
        console.log(i);
        const c = i ? i.id : 0;
        a.address_id = c, await o.vdSave(a);
      }
      this.resJsonData({ message: "Địa chỉ có ID " + e + " đã được xóa thành công." });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async setAsDefault() {
    try {
      if (!this.request.isPost())
        throw new Error("invalid_post_403");
      const t = this.customer.id, e = this.request.getPost("addressId"), s = Number(e);
      if (!s || s === 0)
        throw new Error("address_id_required");
      const r = new ht(this.pool), o = new qt(this.pool);
      if (!await r.findOne({
        id: s,
        customer_id: t,
        is_deleted: 0
      }))
        throw new Error("invalid_404");
      const a = await o.findOne({ id: t });
      if (!a)
        throw new Error("Customer not found.");
      a.address_id = s, await o.vdSave(a), this.resJsonData({
        message: "Địa chỉ đã được đặt làm mặc định thành công.",
        address_id: s
      });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getDefaultAddress() {
    try {
      const t = this.customer.id, e = new qt(this.pool), s = new ht(this.pool), r = await e.findOne({ id: t });
      if (!r)
        throw new Error("Customer not found.");
      const o = r.address_id;
      if (!o)
        return this.resJsonData({
          message: "Không tìm thấy địa chỉ mặc định.",
          address: null
        });
      const n = await s.findOne({
        id: o,
        customer_id: t,
        is_deleted: 0
      });
      n ? this.resJsonData(n) : this.resJsonData({
        message: "Không tìm thấy địa chỉ mặc định hoặc địa chỉ đã bị xóa.",
        address: null
      });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class is extends ot {
  async getCityByStateId(t) {
    try {
      const e = this.request.get("stateId");
      if (!e)
        throw new Error("Vui lòng cung cấp mã Tỉnh/Thành phố (stateId).");
      const s = this.models.districts, r = `province_code = '${e}'`, a = (await s.find(
        r,
        {
          name: "ASC"
        },
        1e3
      )).map((i) => ({
        id: i.code,
        text: i.full_name
      }));
      this.resJsonData(a);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class cs extends ot {
  async getProvinces(t) {
    try {
      const e = this.request.get("countryId"), s = this.models.provinces, r = [];
      e && r.push(`country_id = '${e}'`);
      const o = r.length > 0 ? r.join(" AND ") : "1", i = (await s.find(
        o,
        { name: "ASC" },
        1e3
      )).map((c) => ({
        id: c.code,
        text: c.name
      }));
      this.resJsonData(i);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class vt extends T {
  constructor() {
    super(...arguments), this.table = "product_wishlist", this.vdObject = {
      product_id: "required|int",
      customer_id: "required|int"
    }, this.validateImport = {
      product_id: "required|int",
      customer_id: "required|int"
    };
  }
  fieldName(t) {
    return {
      product_id: "ID Sản phẩm",
      customer_id: "ID Khách hàng"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = [], n = t.get("customerIdSh");
    n && (r.push("customer_id = ?"), o.push(n));
    const a = t.get("productIdSh");
    a && (r.push("product_id = ?"), o.push(a));
    const i = r.length > 0 ? r.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { id: "DESC" },
      c,
      d,
      o
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
  async toggleWishlist(t, e) {
    const s = await this.findOne({
      product_id: e,
      customer_id: t
    });
    if (s)
      return await this.deleteOne({ id: s.id }), { action: "removed", data: null };
    {
      const r = {
        id: 0,
        product_id: e,
        customer_id: t
      }, o = await this.vdSave(r);
      if (o === !1)
        throw console.error("Lưu sản phẩm vào wishlist thất bại sau khi vdSave."), new Error("Validation hoặc lưu DB thất bại.");
      return { action: "added", data: o };
    }
  }
  async getTotalCountByCustomer(t) {
    if (t <= 0)
      return 0;
    const e = `
            SELECT COUNT(id) AS total_count
            FROM ${this.table}
            WHERE customer_id = ?
        `;
    try {
      const [s] = await this.query(e, [t]);
      return Number(s[0]?.total_count || 0);
    } catch (s) {
      throw console.error("Lỗi truy vấn SQL getTotalCountByCustomer:", s), new Error("Lỗi khi đếm sản phẩm trong Wishlist.");
    }
  }
}
let It = class extends ot {
  async toggleWishlist() {
    const t = this.request.getParam("productId"), e = Number(t);
    if (isNaN(e) || e <= 0)
      return this.resJsonErr("ID sản phẩm không hợp lệ.");
    try {
      if (!await new R(this.pool).findOne({
        id: e,
        is_deleted: 0,
        status: 1
      }))
        return this.resJsonErr("invalid_404");
      const n = await new vt(this.pool).toggleWishlist(this.customerId, e);
      return n.action === "added" ? this.resJsonData({
        message: "Đã thêm sản phẩm vào danh sách yêu thích!",
        action: "added"
      }) : n.action === "removed" ? this.resJsonData({
        message: "Đã xóa sản phẩm khỏi danh sách yêu thích.",
        action: "removed"
      }) : this.resJsonData({ message: "Thao tác hoàn tất." });
    } catch (s) {
      return console.error("Lỗi khi thao tác wishlist:", s), this.resJsonErr("Lỗi hệ thống khi thực hiện thao tác.");
    }
  }
  async getWishlist() {
    try {
      const t = this.customer.id, e = this.customer;
      if (!t)
        return this.resJsonErr("Customer ID is required.");
      const s = new vt(this.pool), r = new R(this.pool), o = new tt(this.pool), n = await s.find(
        `customer_id = ${t}`,
        { id: "DESC" },
        !1,
        [],
        "*"
      );
      if (!n || n.length === 0)
        return this.resJsonData([]);
      const a = n.map((g) => g.product_id).filter((g) => typeof g == "number" && g > 0);
      if (a.length === 0)
        return this.resJsonData([]);
      const i = "product", c = a.join(","), d = `${i}.is_deleted = 0 AND ${i}.status = 1 AND ${i}.id IN (${c})`, u = await r.find(
        d,
        { id: "DESC" },
        1e3
      );
      let m = u;
      if (u.length > 0) {
        const g = [], I = n.map((S) => S.product_id).filter((S) => typeof S == "number" && S !== null), _ = await o.getPricesByProductIds(I);
        for (const S of _) {
          const N = S.id;
          typeof N == "number" && N > 0 && g.push(N);
        }
        const w = await r.getCalculatedMultiPrices(
          g,
          e
        ), E = /* @__PURE__ */ new Map();
        for (const S of w) {
          const N = S.id;
          typeof N == "number" && N > 0 && E.set(N, S);
        }
        const D = [];
        for (const S of u) {
          const N = [];
          for (const A of _)
            A.product_id === S.id && N.push(A);
          const y = [];
          for (const A of N) {
            const x = Number(A.id);
            let b = null;
            !Number.isNaN(x) && x > 0 && (b = E.get(x)), y.push(b || A);
          }
          D.push({
            ...S,
            prices: y
          });
        }
        m = D;
      }
      this.resJsonData(m);
    } catch (t) {
      return console.error("Lỗi khi lấy danh sách Wishlist chi tiết:", t), this.resJsonErr("Lỗi hệ thống khi tải Wishlist.");
    }
  }
  async getWishlistProductIds() {
    try {
      const t = this.customer.id;
      if (!t)
        return this.resJsonErr("Customer ID is required.");
      const s = await new vt(this.pool).find(
        `customer_id = ${t}`,
        { id: "DESC" },
        !1,
        [],
        "product_id"
      );
      if (!s || s.length === 0)
        return this.resJsonData([]);
      const r = s.map((o) => o.product_id).filter((o) => typeof o == "number" && o > 0);
      return this.resJsonData(r);
    } catch (t) {
      return console.error("Lỗi khi lấy danh sách Product ID trong Wishlist:", t), this.resJsonErr("Lỗi hệ thống khi tải Wishlist Product IDs.");
    }
  }
  async checkMultiWishlistStatus() {
    try {
      const t = await this.request.getPost("productIds", [], "ids"), e = this.customer.id;
      if (!t.length)
        throw new Error("product_ids_required");
      if (!e)
        return this.resJsonData(t.map((c) => ({ product_id: c, is_in_wishlist: !1 })));
      const s = new vt(this.pool), r = t.join(","), o = `customer_id = ${e} AND product_id IN (${r})`, n = await s.find(
        o,
        void 0,
        !1
      ), a = /* @__PURE__ */ new Map();
      for (const c of n)
        c.product_id && a.set(c.product_id, !0);
      const i = t.map((c) => ({
        product_id: c,
        is_in_wishlist: a.has(c)
      }));
      this.resJsonData(i);
    } catch (t) {
      return console.error("Lỗi khi kiểm tra trạng thái Wishlist đa mục:", t), this.resJsonErr(t.message || "Lỗi hệ thống khi thực hiện kiểm tra đa mục.");
    }
  }
  async countWishlist(t, e) {
    try {
      const s = Number(this.customerId || e), n = {
        count: await new vt(this.pool).getTotalCountByCustomer(s)
      };
      return this.resJsonData(n);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
};
class ds extends ot {
  async getWardByCityId(t) {
    try {
      const e = this.request.get("cityId"), s = this.request.get("countryId");
      if (!e)
        throw new Error("Vui lòng cung cấp mã Quận/Huyện (cityId).");
      const r = this.models.wards, o = {
        district_code: e
        // status: 1
      }, n = [];
      for (const l in o) {
        const u = o[l];
        typeof u == "string" ? n.push(`${l} = '${u}'`) : n.push(`${l} = ${u}`);
      }
      const a = n.join(" AND "), d = (await r.find(
        a,
        {
          full_name: "ASC"
        },
        1e4
      )).map((l) => ({
        id: l.code,
        text: l.full_name
      }));
      this.resJsonData(d);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
let Ut = class extends ot {
  async storeVoucherMaybeApply() {
    try {
      const t = this.request.getParam("storeId");
      if (t <= 0)
        throw new Error("invalid_404");
      const e = Number(this.customerId || 0), s = new X(this.pool), o = await new H(this.pool).getCustomerCart(e);
      let n = 0;
      if (o && o.voucher_store_id) {
        const c = o.voucher_store_id;
        if (c && c !== "NULL" && c.trim() !== "{}")
          try {
            const d = JSON.parse(c), l = String(t);
            d[l] && (n = Number(d[l]));
          } catch (d) {
            console.error("Lỗi Parsing JSON voucher_store_id:", d);
          }
      }
      const a = await s.storeVoucherMaybeApply(t, e), i = {
        voucher_id: n,
        list: a || []
      };
      this.resJsonData(i);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi hệ thống khi lấy danh sách voucher.");
    }
  }
  async cartUseStoreVoucher() {
    try {
      const t = Number(this.customerId || 0);
      if (t <= 0)
        throw new Error("invalid_customer_id");
      const s = await new X(this.pool).cartUseStoreVoucher(this.request, t);
      if (s.status !== 200)
        return this.resJsonErr(s.message);
      this.resJsonData(s);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async cartRemoveStoreVoucher() {
    try {
      const t = Number(this.customerId || 0);
      if (t <= 0)
        throw new Error("invalid_customer_id");
      const s = await new X(this.pool).removeStoreVoucher(this.request, t);
      return s.status !== 200 ? this.resJsonErr(s.message, s.status) : this.resJsonData(s.data, s.message);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
}, Pt = class extends ot {
  async cartUseVoucher() {
    try {
      const t = Number(this.customerId || 0);
      if (t <= 0)
        throw new Error("invalid_customer_id");
      const s = await new U(this.pool).cartUseVoucher(this.request, t);
      return s.status !== 200 ? this.resJsonErr(s.msg || "invalid_404", 400) : this.resJsonData(s);
    } catch (t) {
      return console.error("Lỗi Controller khi áp dụng Global Voucher:", t), this.resJsonErr(t.message);
    }
  }
  async removeVoucher() {
    const t = Number(this.customerId || 0);
    if (t <= 0)
      throw new Error("invalid_customer_id");
    const s = await new U(this.pool).removeVoucher(this.request, t);
    return s.status !== 200 ? this.resJsonErr(s.msg || "invalid_404", 400) : this.resJsonData(s.data, s.status);
  }
  async voucherMaybeApply() {
    try {
      const t = Number(this.customerId || 0);
      if (t <= 0)
        throw new Error("invalid_customer_id");
      const s = await new U(this.pool).voucherMaybeApply(t);
      return this.resJsonData(s.data);
    } catch (t) {
      return console.error("Lỗi Controller khi lấy danh sách voucher:", t), this.resJsonErr(t.message);
    }
  }
  async getVoucherList(t, e) {
    try {
      const s = Number(this.customerId || e);
      if (s <= 0)
        throw new Error("invalid_customer_id");
      const o = await new U(this.pool).getApplicableVouchersList(s);
      return this.resJsonData(o);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
  async profileVouchers() {
    const t = Number(this.customerId || 0), s = await new U(this.pool).getVoucherListForProfile(t);
    return s.status !== 200 ? this.resJsonErr(s.msg || "invalid_404", 400) : this.resJsonData(s.data, 200);
  }
};
const ls = () => {
  const h = process.env.CUSTOMERS_URI || "/customers", t = new $t();
  return t.add(h, [
    //00.Ganeral
    //01.Tài khoản
    {
      link: "/register",
      modules: "customers",
      controller: Wt,
      action: "register",
      method: "post"
    },
    {
      link: "/registerConfirmOtp",
      modules: "customers",
      controller: Wt,
      action: "registerConfirmOtp",
      method: "post"
    },
    {
      link: "/registerResendOtp",
      modules: "customers",
      controller: Wt,
      action: "registerResendOtp",
      method: "post"
    },
    {
      link: "/captcha",
      modules: "customers",
      controller: Q,
      action: "getCaptcha",
      method: "get"
    },
    // {
    //     link: '/uploads/:folder/:id/:filename',
    //     modules: 'admins',
    //     controller: FileController,
    //     action: 'serve',
    // },
    {
      link: "/login",
      modules: "customers",
      controller: Q,
      action: "login",
      method: "post"
    },
    {
      link: "/redirectToGoogle",
      modules: "customers",
      controller: Q,
      action: "redirectToGoogle"
    },
    {
      link: "/googleCallback",
      modules: "customers",
      controller: Q,
      action: "googleCallback",
      method: "get"
    },
    {
      link: "/logout",
      modules: "customers",
      controller: Q,
      action: "logout",
      method: "post"
    },
    {
      link: "/forget",
      modules: "customers",
      controller: Q,
      action: "forget",
      method: "post"
    },
    {
      link: "/forgetConfirmOtp",
      modules: "customers",
      controller: Q,
      action: "forgetConfirmOtp",
      method: "post"
    },
    {
      link: "/forgetResendOtp",
      modules: "customers",
      controller: Q,
      action: "forgetResendOtp",
      method: "post"
    },
    {
      link: "/forgetPassword",
      modules: "customers",
      controller: Q,
      action: "forgetPassword",
      method: "post"
    },
    {
      link: "/refreshToken",
      modules: "customers",
      controller: Q,
      action: "refreshToken",
      method: "post"
    },
    {
      link: "/accounts/getProfile",
      modules: "customers",
      controller: Kt,
      action: "profile"
    },
    {
      link: "/accounts/editProfile",
      modules: "customers",
      controller: Kt,
      action: "editProfile",
      method: "post"
    },
    {
      link: "/accounts/changePassword",
      modules: "customers",
      controller: Kt,
      action: "changePassword",
      method: "post"
    },
    {
      link: "/cart/edit",
      modules: "customers",
      controller: at,
      action: "UpdateCart",
      method: "post"
    },
    {
      link: "/cart/CartCountProduct",
      modules: "customers",
      controller: at,
      action: "CartCountProduct",
      method: "get"
    },
    {
      link: "/cart/getDetail",
      modules: "customers",
      controller: at,
      action: "getDetail",
      method: "get"
    },
    {
      link: "/cart/getCartItems",
      modules: "customers",
      controller: at,
      action: "getCartItems",
      method: "get"
    },
    {
      link: "/cart/CartRemoveProduct",
      modules: "customers",
      controller: at,
      action: "CartRemoveProduct",
      method: "post"
    },
    {
      link: "/cart/toggleSelectionStatus",
      modules: "customers",
      controller: at,
      action: "toggleSelectionStatus",
      method: "post"
    },
    {
      link: "/cart/getDetail",
      modules: "customers",
      controller: at,
      action: "getDetail",
      method: "post"
    },
    {
      link: "/cart/getCartSummary",
      modules: "customers",
      controller: at,
      action: "getCartSummary",
      method: "get"
    },
    {
      link: "/voucherStores/storeVoucherMaybeApply/:storeId",
      modules: "customers",
      controller: Ut,
      action: "storeVoucherMaybeApply",
      method: "get"
    },
    {
      link: "/voucherStores/cartUseStoreVoucher",
      modules: "customers",
      controller: Ut,
      action: "cartUseStoreVoucher",
      method: "post"
    },
    {
      link: "/voucherStores/cartRemoveStoreVoucher/:storeId",
      modules: "customers",
      controller: Ut,
      action: "cartRemoveStoreVoucher",
      method: "post"
    },
    {
      link: "/vouchers/cartUseVoucher",
      modules: "customers",
      controller: Pt,
      action: "cartUseVoucher",
      method: "post"
    },
    {
      link: "/vouchers/voucherMaybeApply",
      modules: "customers",
      controller: Pt,
      action: "voucherMaybeApply",
      method: "get"
    },
    {
      link: "/vouchers/removeVoucher",
      modules: "customers",
      controller: Pt,
      action: "removeVoucher",
      method: "get"
    },
    {
      link: "/vouchers/getVoucherList",
      modules: "customers",
      controller: Pt,
      action: "getVoucherList",
      method: "get"
    },
    {
      link: "/vouchers/profileVouchers",
      modules: "customers",
      controller: Pt,
      action: "profileVouchers",
      method: "get"
    },
    {
      link: "/cartItems/getList",
      modules: "customers",
      controller: ns,
      action: "getList",
      method: "get"
    },
    {
      link: "/customerAddress/getAddresses",
      modules: "customers",
      controller: ct,
      action: "getAddresses",
      method: "get"
    },
    {
      link: "/customerAddress/create",
      modules: "customers",
      controller: ct,
      action: "updateAddress",
      method: "post"
    },
    {
      link: "/customerAddress/edit/:id",
      modules: "customers",
      controller: ct,
      action: "updateAddress",
      method: "post"
    },
    {
      link: "/customerAddress/getAddressDetail/:addressId",
      modules: "customers",
      controller: ct,
      action: "getAddressDetail",
      method: "get"
    },
    {
      link: "/customerAddress/setAsDefault",
      modules: "customers",
      controller: ct,
      action: "setAsDefault",
      method: "post"
    },
    {
      link: "/customerAddress/removeAddress/:addressId",
      modules: "customers",
      controller: ct,
      action: "removeAddress",
      method: "get"
    },
    {
      link: "/customerAddress/getDefaultAddress",
      modules: "customers",
      controller: ct,
      action: "getDefaultAddress",
      method: "get"
    },
    {
      link: "/wards/getWardByCityId",
      modules: "customers",
      controller: ds,
      action: "getWardByCityId",
      method: "get"
    },
    {
      link: "/districts/getCityByStateId",
      modules: "customers",
      controller: is,
      action: "getCityByStateId",
      method: "get"
    },
    {
      link: "/provinces/getProvinces",
      modules: "customers",
      controller: cs,
      action: "getProvinces",
      method: "get"
    },
    {
      link: "/productwishlist/toggleWishlist/:productId",
      modules: "customers",
      controller: It,
      action: "toggleWishlist",
      method: "get"
    },
    {
      link: "/productwishlist/getWishlist",
      modules: "customers",
      controller: It,
      action: "getWishlist",
      method: "get"
    },
    {
      link: "/productwishlist/getWishlistProductIds",
      modules: "customers",
      controller: It,
      action: "getWishlistProductIds",
      method: "get"
    },
    {
      link: "/productwishlist/countWishlist",
      modules: "customers",
      controller: It,
      action: "countWishlist",
      method: "get"
    },
    {
      link: "/productwishlist/checkMultiWishlistStatus",
      modules: "customers",
      controller: It,
      action: "checkMultiWishlistStatus",
      method: "post"
    }
  ]), t.getRouter();
}, us = ls();
class hs extends B {
  constructor() {
    super(...arguments), this.md = this.models.config;
  }
  async getAll() {
    try {
      const t = await this.md.find("1", !1, !1), e = {};
      for (const s of t)
        typeof s.key == "string" && s.key && (e[s.key] = s.value);
      this.resJsonData(e);
    } catch (t) {
      console.error(t), this.resJsonErr(t.message || "Failed to get configs");
    }
  }
}
class me extends B {
  constructor() {
    super(...arguments), this.md = this.models.menu;
  }
  async getFuncMenu(t, e = 0) {
    try {
      t = this.request.get("menu_type"), e = this.request.get("parent_id") || 0;
      const s = parseInt(t, 10);
      if (isNaN(s) || s <= 0)
        throw new Error("invalid_menutype");
      const r = parseInt(e, 10);
      if (r > 0 && !await this.md.findOne({
        id: r,
        menutype: s
      }))
        throw new Error("invalid_404");
      const o = await this.md.getMenuTree(r, s);
      this.resJsonData(o);
    } catch (s) {
      this.resJsonErr(s.message);
    }
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
}
class oe extends T {
  constructor() {
    super(...arguments), this.table = "news_categories", this.vdObject = {
      alias: "required|minLen(2)|maxLen(250)|unique(news_categories,alias)",
      name: "required|minLen(2)|maxLen(150)",
      parent_id: "required|integer|min(0)",
      description: "maxLen(250)",
      meta_title: "maxLen(250)",
      meta_keywords: "maxLen(250)",
      meta_description: "maxLen(250)",
      image: "maxLen(150)",
      layout: "maxLen(30)",
      status: "numeric|min(0)|max(1)",
      is_deleted: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Danh mục",
      alias: "Đường dẫn (Alias)",
      name: "Tên Danh mục",
      description: "Mô tả ngắn",
      meta_title: "Meta Title",
      meta_keywords: "Meta Keywords",
      meta_description: "Meta Description",
      image: "Hình ảnh đại diện",
      layout: "Layout hiển thị",
      status: "Trạng thái",
      is_deleted: "Đã xóa",
      parent_id: "Danh mục cha",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getTree(t = {}, e = 0) {
    const s = [e];
    let r = "parent_id = ?";
    for (const i in t)
      Object.prototype.hasOwnProperty.call(t, i) && (r += ` AND \`${i}\` = ?`, s.push(t[i]));
    const o = `
        SELECT 
            *
        FROM \`${this.table}\`
        WHERE ${r}
        ORDER BY created_at ASC
    `, [n] = await this.query(o, s), a = [];
    if (Array.isArray(n) && n.length > 0)
      for (const i of n) {
        const c = await this.getTree(t, i.id);
        c.length > 0 ? i.children = c : i.children = [], a.push(i);
      }
    return a;
  }
  // async getSubIds(id: number, filter: any = {}, data: number[] = []): Promise<number[]> {
  //     filter.parent_id = id;
  //     filter.isDeleted = 0;
  //     const children = await this.findItems(filter);
  //     for (const child of children) {
  //         data.push(child.id);
  //         filter.parent_id = child.id;
  //         data = await this.getSubIds(child.id, filter, data);
  //     }
  //     return data;
  // }
  async getSubIds(t, e = {}, s = []) {
    const r = { ...e };
    r.parent_id = t, r.isDeleted = 0;
    let o = "";
    const n = [];
    for (const i in r)
      if (Object.prototype.hasOwnProperty.call(r, i)) {
        const c = r[i];
        if (typeof c == "object" && c !== null)
          c.not !== void 0 && n.push(`${i} != ${Number(c.not)}`);
        else {
          const d = typeof c == "string" ? `'${c}'` : c;
          n.push(`${i} = ${d}`);
        }
      }
    n.length ? o = n.join(" AND ") : o = "1";
    const a = await this.find(
      o,
      !1,
      !1,
      void 0,
      "id"
    );
    for (const i of a)
      i.id && (s.push(i.id), s = await this.getSubIds(i.id, r, s));
    return s;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("parentIdSh"), a = [];
    if (s === 0 || s === "0" ? a.push("news_categories.is_deleted = 0") : (s === 1 || s === "1") && a.push("news_categories.is_deleted = 1"), r) {
      const u = `%${r}%`;
      a.push(`news_categories.name LIKE '${u}'`);
    }
    o != null && o !== "" && a.push(`news_categories.status = ${Number(o)} `), n != null && n !== "" ? a.push(`news_categories.parent_id = ${Number(n)} `) : t.get("onlyRoot") === "true" && a.push("news_categories.parent_id = 0");
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "news_categories.parent_id": "ASC", "news_categories.created_at": "ASC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
  async getCategoryAlias(t) {
    const e = await this.findOne({ id: t });
    return e ? e.alias : null;
  }
}
class Ot extends T {
  constructor() {
    super(...arguments), this.table = "news", this.vdObject = {
      name: "required|minLen(2)|maxLen(250)",
      alias: "maxLen(250)|unique(news,alias)",
      category_ids: "maxLen(255)",
      description: "maxLen(250)",
      meta_title: "maxLen(250)",
      meta_keywords: "maxLen(250)",
      meta_description: "maxLen(250)",
      image: "maxLen(250)",
      file: "maxLen(250)",
      store_id: "integer",
      status: "numeric|min(0)|max(1)",
      view: "integer|min(0)",
      hot: "numeric|min(0)|max(1)",
      is_deleted: "numeric|min(0)|max(1)",
      publish_at: "date"
    };
  }
  fieldName(t) {
    return {
      id: "ID Tin tức",
      store_id: "ID Cửa hàng",
      category_ids: "Danh mục",
      alias: "Đường dẫn (Alias)",
      name: "Tiêu đề",
      description: "Mô tả ngắn",
      content: "Nội dung chi tiết",
      image: "Hình ảnh đại diện",
      file: "File đính kèm",
      meta_title: "Meta Title",
      meta_keywords: "Meta Keywords",
      meta_description: "Meta Description",
      status: "Trạng thái",
      view: "Lượt xem",
      hot: "Tin nổi bật",
      is_deleted: "Đã xóa",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật",
      publish_at: "Ngày xuất bản",
      publish_by: "Người xuất bản"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("hotSh"), a = t.get("category_idsSh"), i = t.get("store_idSh"), c = [];
    if (s === 0 || s === "0" ? c.push("news.is_deleted = 0") : (s === 1 || s === "1") && c.push("news.is_deleted = 1"), r) {
      const D = `%${r}%`;
      c.push(`news.name LIKE '${D}'`);
    }
    i && c.push(`news.store_id = ${Number(i)} `), o != null && o !== "" && c.push(`news.status = ${Number(o)}`), n != null && n !== "" && c.push(`news.hot = ${Number(n)}`);
    const d = Number(a);
    if (!isNaN(d) && d > 0) {
      c.push("news.category_ids IS NOT NULL"), c.push("news.category_ids != ''"), c.push("JSON_VALID(news.category_ids) = 1");
      const D = `JSON_OVERLAPS(CAST(news.category_ids AS JSON), JSON_ARRAY('${d}'))`;
      c.push(D);
    }
    const l = e && e.store_id ? e.store_id : 1;
    c.push(`news.store_id = ${l}`);
    const u = c.length ? c.join(" AND ") : "1", m = parseInt(t.get("page", "1")), g = t.get("limit"), I = parseInt(t.get("pageLen", "10")), _ = g ? parseInt(g) : I, w = Math.max(1, _), E = await this.findWithPagination(
      u,
      { "news.created_at": "ASC", "news.id": "ASC" },
      m,
      w
    );
    return {
      page: E.page,
      pageLen: w,
      pageTotal: E.pageTotal,
      recordTotal: E.recordTotal,
      data: E.items
    };
  }
  async getAliasById(t) {
    const e = await this.findOne({ id: t });
    return e ? e.alias : null;
  }
}
class St extends B {
  constructor() {
    super(...arguments), this.md = this.models.news;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async detailByAlias(t) {
    try {
      t = this.request.getParam("alias");
      const e = { alias: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getParentSimple() {
    try {
      const t = await this.models.newsCategory.getTree({ is_deleted: 0 });
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Đã xảy ra lỗi");
    }
  }
  async listNamesNews() {
    try {
      const t = "isdeleted = 0", e = { sort_order: "ASC" }, r = await this.md.find(
        t,
        { sort_order: "ASC" },
        !1,
        void 0,
        "id, name"
      );
      return this.resJsonData(r);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async getNewsByCategoryId() {
    try {
      const t = this.request.getParam("categoryId"), e = Number(t);
      if (isNaN(e) || e <= 0)
        return this.resJsonErr("ID danh mục bài viết không hợp lệ.");
      const s = new Ot(this.pool), r = String(e), o = "news", n = [];
      n.push(`${o}.category_ids = '["${r}"]'`), n.push(`${o}.category_ids LIKE '["${r}",%'`), n.push(`${o}.category_ids LIKE '%,"${r}"]'`), n.push(`${o}.category_ids LIKE '%,"${r}",%'`);
      const a = `(${n.join(" OR ")})`, i = [];
      i.push(`${o}.is_deleted = 0`), i.push(`${o}.status = 1`), i.push(`${o}.category_ids IS NOT NULL`), i.push(a);
      const c = i.join(" AND "), d = await s.find(
        c,
        { publish_at: "DESC" },
        10
      );
      this.resJsonData(d);
    } catch (t) {
      return console.error("Lỗi khi lấy danh sách bài viết theo danh mục:", t), this.resJsonErr("Lỗi hệ thống khi tải danh sách bài viết.");
    }
  }
  async getNewsByCategoryAlias() {
    try {
      const t = this.request.getParam("categoryAlias");
      if (!t)
        return this.resJsonErr("Alias danh mục không được để trống.");
      const e = new Ot(this.pool), r = await new oe(this.pool).findOne({
        alias: t,
        is_deleted: 0,
        status: 1
      });
      if (!r || !r.id)
        return this.resJsonErr("Danh mục không tồn tại hoặc không hợp lệ.");
      const o = r.id, n = String(o), a = "news", i = [];
      i.push(`${a}.category_ids = '["${n}"]'`), i.push(`${a}.category_ids LIKE '["${n}",%'`), i.push(`${a}.category_ids LIKE '%,"${n}"]'`), i.push(`${a}.category_ids LIKE '%,"${n}",%'`);
      const c = `(${i.join(" OR ")})`, d = [];
      d.push(`${a}.is_deleted = 0`), d.push(`${a}.status = 1`), d.push(`${a}.category_ids IS NOT NULL`), d.push(c);
      const l = d.join(" AND "), u = await e.find(
        l,
        { publish_at: "DESC" },
        10
      );
      this.resJsonData(u);
    } catch (t) {
      return console.error("Lỗi khi lấy danh sách bài viết theo alias danh mục:", t), this.resJsonErr("Lỗi hệ thống khi tải danh sách bài viết.");
    }
  }
}
class Gt extends B {
  constructor() {
    super(...arguments), this.md = this.models.newsCategory;
  }
  async getTree() {
    try {
      const t = this.request.get("parent_id"), e = {
        status: 1
      }, s = await this.md.getTree(e, t);
      this.resJsonData(s);
    } catch (t) {
      this.resJsonErr(t.message || "Đã xảy ra lỗi");
    }
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class nt extends B {
  async getList() {
    try {
      const e = await new R(this.pool).getData(
        this.request,
        this.customer || null,
        0
      );
      this.resJsonData(e);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailById() {
    try {
      const t = this.request.getParam("code"), e = Number(t);
      if (e <= 0)
        throw new Error("invalid_id");
      const s = this.customer, o = await new R(this.pool).detailByIdWithPrice(e, s);
      if (!o)
        throw new Error("invalid_404");
      this.resJsonData(o);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailByAlias(t) {
    try {
      t = this.request.getParam("alias");
      const e = this.customer, r = await new R(this.pool).detailByAliasWithPrice(t, e);
      if (!r) throw new Error("invalid_404");
      this.resJsonData(r);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getProductPriceCalculation() {
    try {
      const t = this.request, e = this.models.products, s = t.get("productPriceId"), r = this.customer || null, o = s ? parseInt(s) : null;
      if (!o || o <= 0)
        throw new Error("invalid_product_price_id");
      const n = await this.models.productPrice.getSingleProductPrice(o);
      if (!n || !n.product_id || !n.package_id)
        throw new Error("invalid_404_price_record");
      const a = await e.getCalculatedSinglePrice(
        n,
        r
      );
      if (!a)
        throw new Error("calculation_failed");
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi tính toán giá gói hàng chi tiết.");
    }
  }
  async getMultiProductPriceCalculation() {
    try {
      const t = this.models.products, e = await this.request.getPost("productPriceIds", [], "ids"), s = this.customer || null;
      if (!e || e.length === 0)
        throw new Error("invalid_500_missing_ids");
      const r = await t.getCalculatedMultiPrices(
        e,
        s
      );
      if (!r || r.length === 0)
        return this.resJsonData([]);
      this.resJsonData(r);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi tính toán giá gói hàng chi tiết.");
    }
  }
  getSortOptions(t) {
    const e = "product";
    switch (t) {
      case "most_popular":
        return { [`${e}.view`]: "DESC", [`${e}.id`]: "DESC" };
      case "most_selling":
        return { [`${e}.sold`]: "DESC", [`${e}.id`]: "DESC" };
      case "best_sale_of":
        return { [`${e}.review_point`]: "DESC", [`${e}.review_total`]: "DESC" };
      case "newest":
        return { [`${e}.created_at`]: "DESC", [`${e}.id`]: "DESC" };
      case "low_high_price":
        return { [`${e}.created_at`]: "DESC", [`${e}.id`]: "ASC" };
      case "high_low_price":
        return { [`${e}.created_at`]: "DESC", [`${e}.id`]: "DESC" };
      default:
        return { [`${e}.created_at`]: "DESC", [`${e}.id`]: "DESC" };
    }
  }
  async getProductsByCategory() {
    try {
      const t = new R(this.pool), e = this.request.getParam("alias"), s = await this.request.get("fcatid", [], "ids"), r = await this.request.get("frating", [], "ids"), o = this.request.get("sort"), n = {
        // page: page,
        // limit: limit,
        // offset: offset,
        fcatid: s,
        frating: r,
        order: this.getSortOptions(o)
      }, a = await t.getProductsByCategoryAlias(
        e,
        this.customer || null,
        n
      );
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async getSimilarProductsByAlias() {
    try {
      const t = new R(this.pool), e = this.request.getParam("alias");
      if (!e)
        return this.resJsonErr("Product alias is required.");
      const s = {
        limit: this.request.get("limit", 10),
        offset: this.request.get("offset", 0)
      }, r = await t.getSimilarProductsByAlias(
        e,
        this.customer || null,
        s
      );
      this.resJsonData(r);
    } catch (t) {
      console.error("Error in getSimilarProductsByAlias:", t), this.resJsonErr(t.message);
    }
  }
}
class Ht extends B {
  constructor() {
    super(...arguments), this.md = this.models.banners;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getDetailsByArrayIds() {
    try {
      const t = this.request.getPost("banner_ids", [], "ids");
      if (!t.length)
        return this.resJsonErr("invalid_ids_list");
      const e = t.filter((i) => typeof i == "number" && i > 0);
      if (e.length === 0)
        return this.resJsonData([]);
      const r = `id IN (${e.join(",")}) AND status = 1`, o = await this.md.find(r, !1, !1), n = {};
      for (const i of o)
        i.id && (n[i.id] = i);
      const a = [];
      for (const i of e) {
        const c = n[i];
        c && a.push(c);
      }
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class mt extends B {
  constructor() {
    super(...arguments), this.md = this.models.stores;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getStoreDetail() {
    try {
      const t = this.request.get("alias");
      if (!t)
        throw new Error("invail_alias");
      const s = await this.models.stores.getStoreByAlias(t);
      if (!s)
        throw new Error("invail_store");
      this.resJsonData(s);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async listNamesStores() {
    try {
      const t = "is_deleted = 0", e = { created_at: "ASC" }, s = await this.md.find(
        t,
        e,
        !1,
        void 0,
        "id, name"
      );
      return this.resJsonData(s);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
  async getDetailAlias() {
    try {
      const t = this.request.getParam("alias");
      if (!t)
        throw new Error("invail_alias");
      const e = await this.models.stores.getStoreByAlias(t);
      if (!e)
        throw new Error("invail_store");
      this.resJsonData(e);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi hệ thống khi truy vấn cửa hàng.");
    }
  }
  async getProductsByStoreAlias() {
    try {
      const t = this.request, e = this.customer || null, s = t.get("is_deleted") || 0, r = this.models.stores, o = this.request.getParam("alias");
      if (!o)
        throw new Error("invail_alias");
      const n = await r.getProductListByStore(
        t,
        e,
        s,
        o
      );
      this.resJsonData(n);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi khi lấy danh sách sản phẩm theo alias cửa hàng.");
    }
  }
  async getProductsByStoreId() {
    try {
      const t = this.request, e = this.customer || null, s = t.get("is_deleted") || 0, r = t.getParam("store_id");
      if (!r || Number(r) <= 0)
        throw new Error("invalid_store_id");
      const o = Number(r), a = await this.models.stores.getProductListByStoreId(
        t,
        e,
        s,
        o
      );
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message || "Lỗi khi lấy danh sách sản phẩm.");
    }
  }
}
class Yt extends B {
  constructor() {
    super(...arguments), this.md = this.models.productPrice, this.actionActive = ["index", "create", "detail", "edit", "delete", "deleteone"], this.is_deleted = !1;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getSingleProductPrice() {
    try {
      const t = this.request, e = parseInt(t.get("productPriceId") || t.query.productPriceId), r = await this.models.productPrice.getSingleProductPrice(
        e
      );
      if (!r)
        throw new Error("invalid_404");
      this.resJsonData(r);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class Lt extends B {
  constructor() {
    super(...arguments), this.md = this.models.categories;
  }
  async getList() {
    try {
      const e = this.request.get("isPaginated") !== "false", s = await this.md.getDatas(
        this.request,
        this.user,
        e
      );
      e ? this.resJsonData(s) : this.resJson({ data: s, status: 200 });
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async detailByAlias(t) {
    try {
      t = this.request.getParam("alias");
      const e = { alias: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getListByArrayIds() {
    try {
      const t = this.request.getPost("category_ids", [], "ids");
      if (!t.length)
        return this.resJsonErr("invalid_ids_list");
      const e = t.filter((i) => typeof i == "number" && i > 0);
      if (e.length === 0)
        return this.resJsonData([]);
      const r = `id IN (${e.join(",")}) AND status = 1`, o = await this.md.find(r, !1, !1), n = {};
      for (const i of o)
        i.id && (n[i.id] = i);
      const a = [];
      for (const i of e) {
        const c = n[i];
        c && a.push(c);
      }
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class Qt extends B {
  constructor() {
    super(...arguments), this.md = this.models.packages;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async detailByAlias(t) {
    try {
      t = this.request.getParam("alias");
      const e = { alias: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class ge extends B {
  constructor() {
    super(...arguments), this.md = this.models.voucher;
  }
  async getList() {
    try {
      const e = this.request.get("isPaginated") !== "false", s = await this.md.getDatas(
        this.request,
        0,
        e
      );
      e ? this.resJsonData(s) : this.resJson({ data: s, status: 200 });
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class Et extends B {
  constructor() {
    super(...arguments), this.md = this.models.promotions;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  async getFlashSales() {
    try {
      const t = await this.md.getFlashSale(this.request, this.customer);
      if (!t || t.length === 0)
        throw new Error("invalid_flash_sale");
      this.resJsonData({ flashSaleData: t });
    } catch (t) {
      console.error("Lỗi khi lấy danh sách Flash Sale:", t), this.resJsonErr(t.message || "Lỗi khi lấy danh sách Flash Sale.");
    }
  }
  async getFlashSaleByProducts() {
    try {
      const t = this.customer, e = await this.request.get("storeIds", [], "ids"), s = await this.md.getFlashSaleProducts(this.request, t, e);
      if (!s || s.length === 0)
        return this.resJsonData([]);
      this.resJsonData(s);
    } catch (t) {
      console.error("Lỗi khi lấy danh sách Flash Sale:", t), this.resJsonErr(t.message || "Lỗi khi lấy danh sách Flash Sale.");
    }
  }
}
class pe extends B {
  constructor() {
    super(...arguments), this.md = this.models.voucherStore;
  }
  async getList() {
    try {
      const e = this.request.get("isPaginated") !== "false", s = await this.md.getDatas(
        this.request,
        0,
        e
      );
      e ? this.resJsonData(s) : this.resJson({ data: s, status: 200 });
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class _e extends B {
  constructor() {
    super(...arguments), this.md = this.models.productReviews;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class fe extends B {
  constructor() {
    super(...arguments), this.md = this.models.productReviewReply;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class we extends B {
  constructor() {
    super(...arguments), this.md = this.models.voucherStoreCustomer;
  }
  async getList() {
    const e = this.request.get("isPaginated") !== "false", s = await this.md.getDatas(
      this.request,
      e
    );
    e ? this.resJsonData(s) : this.resJson({ data: s, status: 200 });
  }
  catch(t) {
    this.resJsonErr(t.message);
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class ye extends B {
  constructor() {
    super(...arguments), this.md = this.models.pages;
  }
  parseJsonFields(t) {
    if (!t || !t.params || typeof t.params != "string") return t;
    try {
      t.params = JSON.parse(t.params);
    } catch (e) {
      console.error("Lỗi parse JSON cho trường 'params':", e), t.params = null;
    }
    return t;
  }
  async getDetail(t) {
    try {
      if (t = this.request.getParam("alias"), !t) throw new Error("invalid_alias");
      const e = { alias: t, status: 1 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      return s = this.parseJsonFields(s), this.resJsonData(s);
    } catch (e) {
      return this.resJsonErr(e.message);
    }
  }
  async listPages() {
    try {
      const e = await this.md.find(
        "1",
        { sort_order: "ASC" },
        !1,
        void 0,
        "*"
      );
      return this.resJsonData(e);
    } catch (t) {
      return this.resJsonErr(t.message);
    }
  }
}
class zt extends B {
  constructor() {
    super(...arguments), this.md = this.models.advertisements;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.user
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
  // async getDetailsByArrayIds() {
  //     try {
  //         const listId: number[] = await this.request.getPost('advertisement_ids', [], 'ids');
  //         if (!listId.length) {
  //             return this.resJsonErr('invalid_ids_list');
  //         }
  //         const validIds = listId.filter(id => typeof id === 'number' && id > 0);
  //         if (validIds.length === 0) {
  //             return this.resJsonData([]);
  //         }
  //         const conditions: any = {
  //             id: validIds,
  //             status: 1
  //         };
  //         const rawItems = await this.md.find(conditions);
  //         const sortedItems = validIds.map(id => rawItems.find((item: any) => item.id === id)).filter(Boolean);
  //         this.resJsonData(sortedItems);
  //     } catch (error: any) {
  //         this.resJsonErr(error.message);
  //     }
  // }
  async getDetailsByArrayIds() {
    try {
      const t = this.request.getPost("advertisement_ids", [], "ids");
      if (!t.length)
        return this.resJsonErr("invalid_ids_list");
      const e = t.filter((i) => typeof i == "number" && i > 0);
      if (e.length === 0)
        return this.resJsonData([]);
      const r = `id IN (${e.join(",")}) AND status = 1`, o = await this.md.find(r, !1, !1), n = {};
      for (const i of o)
        i.id && (n[i.id] = i);
      const a = [];
      for (const i of e) {
        const c = n[i];
        c && a.push(c);
      }
      this.resJsonData(a);
    } catch (t) {
      this.resJsonErr(t.message);
    }
  }
}
class Xt extends B {
  constructor() {
    super(...arguments), this.md = this.models.productPromotions;
  }
  async getList() {
    try {
      const t = await this.md.getData(
        this.request,
        this.user
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
  async detailBefore(t) {
    return t;
  }
  async detailById(t = 0) {
    try {
      if (!t) throw new Error("invalid_id");
      const e = { id: t, status: 1, is_deleted: 0 };
      let s = await this.md.findOne(e);
      if (!s) throw new Error("invalid_404");
      s = await this.detailBefore(s), this.resJsonData(s);
    } catch (e) {
      this.resJsonErr(e.message);
    }
  }
}
class ms extends j {
  constructor() {
    super(...arguments), this.md = this.models.orderItems;
  }
  async getList() {
    try {
      const t = await this.md.getDatas(
        this.request,
        this.customer,
        0
      );
      this.resJsonData(t);
    } catch (t) {
      this.resJsonErr(t.message || "Không thể lấy danh sách menu.");
    }
  }
}
const gs = () => {
  const h = process.env.SITES_URI || "", t = new $t();
  return t.add(h, [
    //00.Ganeral
    //01.Tài khoản
    {
      link: "/config/getAll",
      modules: "admins",
      controller: hs,
      action: "getAll"
    },
    {
      link: "/menu/getList",
      modules: "sites",
      controller: me,
      action: "getList"
    },
    {
      link: "/menu/getFuncMenu",
      modules: "sites",
      controller: me,
      action: "getFuncMenu"
    },
    {
      link: "/news/getList",
      modules: "sites",
      controller: St,
      action: "getList"
    },
    {
      link: "/news/:alias",
      modules: "sites",
      controller: St,
      action: "detailByAlias"
    },
    {
      link: "/news/detail/:code([0-9]+)",
      modules: "sites",
      controller: St,
      action: "detailById"
    },
    {
      link: "/news/getNewsByCategoryId/:categoryId",
      modules: "sites",
      controller: St,
      action: "getNewsByCategoryId"
    },
    {
      link: "/news/getNewsByCategoryAlias/:categoryAlias",
      modules: "sites",
      controller: St,
      action: "getNewsByCategoryAlias"
    },
    {
      link: "/newsCategories/getList",
      modules: "sites",
      controller: Gt,
      action: "getList"
    },
    {
      link: "/newsCategories/detail/:code([0-9]+)",
      modules: "sites",
      controller: Gt,
      action: "detailById"
    },
    {
      link: "/newsCategories/getTree/:parent_id",
      modules: "sites",
      controller: Gt,
      action: "getTree"
    },
    {
      link: "/products/getProductPriceCalculation",
      modules: "sites",
      controller: nt,
      action: "getProductPriceCalculation"
    },
    {
      link: "/products/getMultiProductPriceCalculation",
      modules: "sites",
      controller: nt,
      action: "getMultiProductPriceCalculation",
      method: "post"
    },
    {
      link: "/products/getList",
      modules: "sites",
      controller: nt,
      action: "getList"
    },
    {
      link: "/categories/:alias",
      modules: "sites",
      controller: nt,
      action: "getProductsByCategory"
    },
    {
      link: "/products/:alias",
      modules: "sites",
      controller: nt,
      action: "getSimilarProductsByAlias"
    },
    {
      link: "/products/promotions",
      modules: "sites",
      controller: nt,
      action: "getPromotionalProducts"
    },
    {
      link: "/promotions/flash-sale",
      modules: "sites",
      controller: Et,
      action: "getFlashSales"
    },
    {
      link: "/promotions/getFlashSaleByProducts",
      modules: "sites",
      controller: Et,
      action: "getFlashSaleByProducts"
    },
    {
      link: "/products/detail/:code([0-9]+)",
      modules: "sites",
      controller: nt,
      action: "detailById"
    },
    {
      link: "/products/detail/:alias",
      modules: "sites",
      controller: nt,
      action: "detailByAlias"
    },
    {
      link: "/productPromotions/getList",
      modules: "sites",
      controller: Xt,
      action: "getList"
    },
    {
      link: "/productPromotions/getProductsBySlot",
      modules: "sites",
      controller: Xt,
      action: "getProductsBySlot"
    },
    {
      link: "/productPromotions/fetchAllProductData",
      modules: "sites",
      controller: Xt,
      action: "fetchAllProductData"
    },
    {
      link: "/orderItem/getList",
      modules: "sites",
      controller: ms,
      action: "getList"
    },
    {
      link: "/categories/getList",
      modules: "sites",
      controller: Lt,
      action: "getList"
    },
    {
      link: "/categories/detail/:code([0-9]+)",
      modules: "sites",
      controller: Lt,
      action: "detailById"
    },
    {
      link: "/categories/detail/:alias",
      modules: "sites",
      controller: Lt,
      action: "detailByAlias"
    },
    {
      link: "/categories/getListByArrayIds",
      modules: "sites",
      controller: Lt,
      action: "getListByArrayIds",
      method: "post"
    },
    {
      link: "/banners/getList",
      modules: "sites",
      controller: Ht,
      action: "getList"
    },
    {
      link: "/banners/detail/:code([0-9]+)",
      modules: "sites",
      controller: Ht,
      action: "detailById"
    },
    {
      link: "/banners/getDetailsByArrayIds",
      modules: "sites",
      controller: Ht,
      action: "getDetailsByArrayIds",
      method: "post"
    },
    {
      link: "/advertisements/getList",
      modules: "sites",
      controller: zt,
      action: "getList"
    },
    {
      link: "/advertisements/detail/:code([0-9]+)",
      modules: "sites",
      controller: zt,
      action: "detailById"
    },
    {
      link: "/advertisements/getDetailsByArrayIds",
      modules: "sites",
      controller: zt,
      action: "getDetailsByArrayIds",
      method: "post"
    },
    {
      link: "/stores/getList",
      modules: "sites",
      controller: mt,
      action: "getList"
    },
    {
      link: "/stores/detail/:code([0-9]+)",
      modules: "sites",
      controller: mt,
      action: "detailById"
    },
    {
      link: "/stores/:alias",
      modules: "sites",
      controller: mt,
      action: "getDetailAlias"
    },
    {
      link: "/stores/getProductsByStore/:alias",
      modules: "sites",
      controller: mt,
      action: "getProductsByStoreAlias"
    },
    {
      link: "/stores/getProductsByStoreId/:store_id",
      modules: "sites",
      controller: mt,
      action: "getProductsByStoreId"
    },
    {
      link: "/stores/listNamesStores",
      modules: "sites",
      controller: mt,
      action: "listNamesStores"
    },
    {
      link: "/packages/getList",
      modules: "sites",
      controller: Qt,
      action: "getList"
    },
    {
      link: "/packages/detail/:code([0-9]+)",
      modules: "sites",
      controller: Qt,
      action: "detailById"
    },
    {
      link: "/packages/detail/:alias",
      modules: "sites",
      controller: Qt,
      action: "detailByAlias"
    },
    {
      link: "/productPrice/getList",
      modules: "sites",
      controller: Yt,
      action: "getList"
    },
    {
      link: "/productPrice/detail/:code([0-9]+)",
      modules: "sites",
      controller: Yt,
      action: "detailById"
    },
    {
      link: "/productPrice/getSingleProductPrice",
      modules: "sites",
      controller: Yt,
      action: "getSingleProductPrice"
    },
    {
      link: "/vouchers/getList",
      modules: "sites",
      controller: ge,
      action: "getList"
    },
    {
      link: "/vouchers/detail/:code([0-9]+)",
      modules: "sites",
      controller: ge,
      action: "detailById"
    },
    {
      link: "/promotions/getList",
      modules: "sites",
      controller: Et,
      action: "getList"
    },
    {
      link: "/promotions/detail/:code([0-9]+)",
      modules: "sites",
      controller: Et,
      action: "detailById"
    },
    {
      link: "/flash-sale",
      modules: "sites",
      controller: Et,
      action: "getAllFlashSaleSlots"
    },
    {
      link: "/voucherStore/getList",
      modules: "sites",
      controller: pe,
      action: "getList"
    },
    {
      link: "/voucherStore/detail/:code([0-9]+)",
      modules: "sites",
      controller: pe,
      action: "detailById"
    },
    {
      link: "/voucherStoreCustomer/getList",
      modules: "sites",
      controller: we,
      action: "getList"
    },
    {
      link: "/voucherStoreCustomer/detail/:code([0-9]+)",
      modules: "sites",
      controller: we,
      action: "detailById"
    },
    {
      link: "/productReviews/getList",
      modules: "sites",
      controller: _e,
      action: "getList"
    },
    {
      link: "/productReviews/detail/:code([0-9]+)",
      modules: "sites",
      controller: _e,
      action: "detailById"
    },
    {
      link: "/productReviewsReply/getList",
      modules: "sites",
      controller: fe,
      action: "getList"
    },
    {
      link: "/productReviewsReply/detail/:code([0-9]+)",
      modules: "sites",
      controller: fe,
      action: "detailById"
    },
    {
      link: "/pages/getDetail/:alias",
      modules: "sites",
      controller: ye,
      action: "getDetail"
    },
    {
      link: "/pages/listPages",
      modules: "sites",
      controller: ye,
      action: "listPages"
    },
    {
      link: "/forget",
      modules: "sites",
      controller: Q,
      action: "forget",
      method: "post"
    },
    {
      link: "/forgetPassword",
      modules: "sites",
      controller: Q,
      action: "forgetPassword",
      method: "post"
    },
    {
      link: "/forgetResendOtp",
      modules: "sites",
      controller: Q,
      action: "forgetResendOtp",
      method: "post"
    }
  ]), t.getRouter();
}, ps = gs();
class z {
  // constructor(req: FastifyRequest) {
  //     this.req = req;
  // }
  constructor(t, e, s) {
    this.body = {}, this.files = {}, this.start = async () => {
      if (this.req.body)
        this.body = this.req.body;
      else if (this.req.isMultipart()) {
        const r = J.join(J.resolve(), "uploads", "tmb");
        K.existsSync(r) || K.mkdirSync(r, { recursive: !0 });
        for await (const o of this.req.parts())
          if (o.type === "field")
            this.body[o.fieldname] === void 0 ? this.body[o.fieldname] = o.value : Array.isArray(this.body[o.fieldname]) ? this.body[o.fieldname].push(o.value) : this.body[o.fieldname] = [this.body[o.fieldname], o.value];
          else if (rt.checkDefFile(o.filename, o.mimetype, !1)) {
            const n = J.extname(o.filename), a = M.slugify(J.basename(o.filename, n)), i = a + n, c = J.join(r, i);
            try {
              await $e(o.file, K.createWriteStream(c));
            } catch (d) {
              d.code === "ABORT_ERR" ? console.error("Người dùng đã hủy upload (client cancel).") : d.code === "ERR_STREAM_PREMATURE_CLOSE" ? console.error("Stream đóng sớm bất thường, có thể do mất kết nối.") : console.error("Lỗi phía server khi upload:", d.message);
            }
            this.files[o.fieldname] === void 0 && (this.files[o.fieldname] = []), this.files[o.fieldname].push({ filename: i, basename: a, path: c, mimetype: o.mimetype, ext: n });
          }
      }
    }, this.end = async () => {
      const r = Object.values(this.files);
      for await (const o of r)
        for await (const n of o)
          K.existsSync(n.path) && K.unlinkSync(n.path);
    }, this.req = t, this.res = e, this.mysqlPool = s;
  }
  isPost() {
    return this.req.method === "POST";
  }
  isGet() {
    return this.req.method === "GET";
  }
  isAjax() {
    return this.req.headers["x-requested-with"] === "XMLHttpRequest";
  }
  getPost(t = "", e = "", s = "stripTags") {
    if (t === "") return this.body;
    if (!this.hasPost(t)) return e;
    const r = this.body[t] && typeof this.body[t] == "object" && "value" in this.body[t] ? this.body[t].value : this.body[t];
    return z.filterSafeData(r, s);
  }
  get(t = "", e = "", s = "stripTags") {
    const r = this.req.query;
    return t === "" ? r : this.has(t) ? z.filterSafeData(r[t], s) : e;
  }
  getParam(t, e = null, s = "stripTags") {
    const r = this.req.params;
    return !r || !r[t] ? e : z.filterSafeData(r[t], s);
  }
  has(t) {
    const e = this.req.query;
    return Array.isArray(t) ? t.every((s) => e[s] !== void 0) : e[t] !== void 0;
  }
  hasPost(t) {
    return Array.isArray(t) ? t.every((e) => this.body[e] !== void 0) : this.body[t] !== void 0;
  }
  getHeader(t) {
    return this.req.headers[t.toLowerCase()]?.toString() || "";
  }
  static filterSafeData(t, e = "stripTags") {
    if (typeof t == "number") return t;
    if (e === "ids")
      return Array.isArray(t) ? z.filterIds(t) : z.filterIds([t]);
    if (e === "stringIds")
      return Array.isArray(t) ? z.filterStringIds(t) : z.filterStringIds([t]);
    if (e === "strings")
      return Array.isArray(t) ? z.filterStrings(t) : z.filterStrings([t]);
    if (typeof t == "string") {
      if (e === "stripTags") return t.replace(/<[^>]*>?/gm, "").trim();
      if (e === "html") return z.filterHtml(t);
      if (e === "int") {
        const s = parseInt(t);
        return Number.isInteger(s) ? s : -1;
      }
      if (e === "number") return isNaN(Number(t)) ? 0 : Number(t);
      if (e === "date") {
        if (!t) return "";
        const s = new Date(t);
        return isNaN(s.getTime()) ? "" : s;
      }
      if (e === "datetime") {
        if (!t) return "";
        const s = new Date(t);
        return isNaN(s.getTime()) ? "" : s;
      }
    }
    return e === "raw" ? t : typeof t === (e ?? "");
  }
  static filterHtml(t) {
    return typeof t != "string" ? "" : t.replace("/</*w+:w[^>]*+>/i", "").replace("/<script(.*?)>(.*?)<\/script>/is", "").replace(`/(<[^>]+?[\0- "'])(?:on|xmlns)[^>]*+[>\b]?/iu`, "$1>").replace("/([a-z]*)[\0- ]*=[\0- ]*([`'\"]*)[\0- ]*j[\0- ]*a[\0- ]*v[\0- ]*a[\0- ]*s[\0- ]*c[\0- ]*r[\0- ]*i[\0- ]*p[\0- ]*t[\0- ]*:/iu", "$1=$2nojavascript...").replace(`/([a-z]*)[\0- ]*=(['"]*)[\0- ]*v[\0- ]*b[\0- ]*s[\0- ]*c[\0- ]*r[\0- ]*i[\0- ]*p[\0- ]*t[\0- ]*:/iu`, "$1=$2novbscript...").replace(`/([a-z]*)[\0- ]*=(['"]*)[\0- ]*-moz-binding[\0- ]*:/u`, "$1=$2nomozbinding...").replace("/(<[^>]+?)style[\0- ]*=[\0- ]*[`'\"]*.*?expression[\0- ]*([^>]*+>/i", "$1>").replace("/(<[^>]+?)style[\0- ]*=[\0- ]*[`'\"]*.*?behaviour[\0- ]*([^>]*+>/i", "$1>").replace("/(<[^>]+?)style[\0- ]*=[\0- ]*[`'\"]*.*?s[\0- ]*c[\0- ]*r[\0- ]*i[\0- ]*p[\0- ]*t[\0- ]*:*[^>]*+>/iu", "$1>").replace("/alert((.*?))/is", "");
  }
  static filterIds(t) {
    let e = t.map((s) => Number(s));
    return e = e.filter((s) => !Number.isNaN(s)), [...new Set(e)];
  }
  static filterStringIds(t) {
    return this.filterIds(t).map((s) => s.toString());
  }
  static filterStrings(t) {
    const e = t.map((s) => this.filterSafeData(s, "stripTags"));
    return [...new Set(e)];
  }
}
function _s(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Dt = { exports: {} }, kt = { exports: {} }, ve;
function fs() {
  if (ve) return kt.exports;
  ve = 1;
  const h = /at\s(?:.*\.)?plugin\s.*\n\s*(.*)/, t = /(\w*(\.\w*)*)\..*/;
  kt.exports = function(r) {
    if (r.name.length > 0) return r.name;
    const o = Error.stackTraceLimit;
    Error.stackTraceLimit = 10;
    try {
      throw new Error("anonymous function");
    } catch (n) {
      return Error.stackTraceLimit = o, e(n.stack);
    }
  };
  function e(s) {
    const r = s.match(h);
    return r ? r[1].split(/[/\\]/).slice(-1)[0].match(t)[1] : "anonymous";
  }
  return kt.exports.extractPluginName = e, kt.exports;
}
var Zt, Ie;
function ws() {
  return Ie || (Ie = 1, Zt = function(t) {
    return t[0] === "@" && (t = t.slice(1).replace("/", "-")), t.replace(/-(.)/g, function(e, s) {
      return s.toUpperCase();
    });
  }), Zt;
}
var Pe;
function ys() {
  if (Pe) return Dt.exports;
  Pe = 1;
  const h = fs(), t = ws();
  let e = 0;
  function s(r, o = {}) {
    let n = !1;
    if (r.default !== void 0 && (r = r.default), typeof r != "function")
      throw new TypeError(
        `fastify-plugin expects a function, instead got a '${typeof r}'`
      );
    if (typeof o == "string" && (o = {
      fastify: o
    }), typeof o != "object" || Array.isArray(o) || o === null)
      throw new TypeError("The options object should be an object");
    if (o.fastify !== void 0 && typeof o.fastify != "string")
      throw new TypeError(`fastify-plugin expects a version string, instead got '${typeof o.fastify}'`);
    o.name || (n = !0, o.name = h(r) + "-auto-" + e++), r[Symbol.for("skip-override")] = o.encapsulate !== !0, r[Symbol.for("fastify.display-name")] = o.name, r[Symbol.for("plugin-meta")] = o, r.default || (r.default = r);
    const a = t(o.name);
    return !n && !r[a] && (r[a] = r), r;
  }
  return Dt.exports = s, Dt.exports.default = s, Dt.exports.fastifyPlugin = s, Dt.exports;
}
var vs = ys();
const be = /* @__PURE__ */ _s(vs), Is = be(async (h) => {
  await h.register(Je, {
    promise: !0,
    connectionString: `mysql://${process.env.MYSQL_USER || "root"}:${process.env.MYSQL_PASSWORD || ""}@${process.env.MYSQL_HOST || "localhost"}:${process.env.MYSQL_PORT || 3306}/${process.env.MYSQL_DATABASE || "CTM"}`
  });
});
class Ps extends T {
  constructor() {
    super(...arguments), this.table = "users", this.vdObject = {
      fullname: "required|minLen(2)|maxLen(250)",
      username: "required|minLen(2)|unique(users,username)",
      // username: 'required|minLen(2)',
      email: "required|unique(users,email)|email"
      // email: 'required|email',
      // password: 'required|password',
    }, this.validateLogin = {
      username: "required",
      password: "required|password"
    }, this.validateForgetPassowrd = {
      email: "required|maxLen(150)",
      referenceCode: "required",
      password: "required|password"
    }, this.validatePassword = {
      password: "required|password"
    }, this.validateProfile = {
      fullname: "required|minLen(2)|maxLen(250)",
      email: "required|email|unique(users,email)"
    };
  }
  fieldName(t) {
    return {
      username: "Tên đăng nhập",
      avatar: "Hình ảnh",
      fullname: "Họ & tên",
      email: "E-mail",
      phone: "Số điện thoại",
      gender: "Giới tính",
      birthday: "Ngày sinh",
      countryId: "Quốc gia",
      provinceId: "Tỉnh/Thành phố",
      districtId: "Quận/Huyện",
      wardId: "Phường/Xã",
      address: "Số nhà, tên đường",
      fulladdress: "Địa chỉ",
      password: "Mật khẩu",
      facebookId: "Facebook ID",
      googleId: "Google ID",
      note: "Ghi chú",
      referral_code: "Mã giới thiệu",
      status: "Trạng thái",
      confirm_failed: "Lý do từ chối xác minh",
      created_at: "Thời gian tạo"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("emailSh"), n = t.get("statusSh"), a = [];
    if (r) {
      const u = `%${r}%`;
      a.push(`(users.fullname LIKE '${u}' OR users.username LIKE '${u}')`);
    }
    if (o) {
      const u = `%${o}%`;
      a.push(`users.email LIKE '${u}'`);
    }
    n && a.push(`users.status = ${Number(n)}`), (s === !0 || s === 0 || s === "true") && a.push("users.is_deleted = 0");
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "users.created_at": "ASC" },
      c,
      d,
      "LEFT JOIN `groups` ON users.group_id = `groups`.id",
      "users.*, `groups`.name AS groupName"
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
}
class se extends T {
  constructor() {
    super(...arguments), this.table = "groups", this.vdObject = {
      name: "required|maxLen(100)",
      status: "required"
    }, this.validateImport = {
      name: "required|maxLen(100)",
      status: "required"
    };
  }
  async getName(t) {
    const e = await this.findOne({ id: t });
    return e ? e.name : "";
  }
  fieldName(t) {
    return {
      name: "Tiêu đề",
      status: "Trạng thái"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = t.get("nameSh");
    if (o) {
      const l = `%${o}%`;
      r.push(`(fullname LIKE '${l}' OR username LIKE '${l}')`);
    }
    t.get("statusSh") && r.push("status = ?");
    const a = r.length > 0 ? r.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), d = await this.findWithPagination(
      a,
      { created_at: "ASC" },
      i,
      c
    );
    return {
      page: d.page,
      pageLen: d.length,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
  static isAdm(t) {
    return t === 1;
  }
}
class Ss extends T {
  constructor() {
    super(...arguments), this.table = "usertoken", this.validateApiCreate = {
      userId: "required"
    };
  }
  async createByUser(t, e, s = !1) {
    let r = !1;
    if (s) {
      const a = { userId: t.id, refreshToken: s };
      if (r = await this.findOne(a), !r) throw new Error("invalid_refresh_token");
      if (r.us !== e.headers["user-agent"]) throw new Error("invalid_refresh_token");
      if (r.expiredRefreshAt < Date.now()) throw new Error("invalid_expired_refresh_token");
    } else
      r = {}, r.userId = t.id;
    const o = Number(process.env.JWT_TIMEOUT || 3600);
    if (r.expiredAt = Date.now() + o * 500, r.expiredRefreshAt = Date.now() + o * 1e3 * 24 * 7, r.accessToken = ft.createToken(t, e), r.refreshToken = Ee(), r.ip = e.ip, r.us = e.headers["user-agent"] || "unknown", !await this.vdSave(r, this.validateApiCreate)) throw new Error("invalid_save_user_token");
    return r;
  }
  async refreshToken(t) {
    const s = ft.verifyToken(t.req).sub, o = await t.models.user.findOne({ id: s, is_deleted: 0, status: 1 });
    if (!o) throw new Error("invalid_user_accessToken");
    const n = t.req.cookies?.refreshToken;
    if (!n) throw new Error("invalid_refresh_token");
    const a = await this.createByUser(o, t.req, n);
    return t.res.setCookie("refreshToken", a.refreshToken, {
      httpOnly: !0,
      secure: !0,
      sameSite: "strict",
      path: "/",
      maxAge: 3600 * 24 * 7
    }), t.res.setCookie("accessToken", a.accessToken, {
      httpOnly: !0,
      secure: !0,
      sameSite: "strict",
      path: "/",
      maxAge: 3600 * 24 * 7
    }), a;
  }
}
class Nt extends T {
  constructor() {
    super(...arguments), this.table = "permissions";
  }
  async getPermissionByFunction(t, e) {
    const s = {
      adminFunctionId: t,
      group_id: Number(e)
    };
    return this.findOne(s);
  }
  async checkPermission(t, e, s, r, o) {
    if (se.isAdm(o)) return !0;
    const n = r.code ? 1 : 0, a = {
      module: t,
      controller: e,
      action: s,
      code: n
    };
    if (await this.skipPermission(a) || (a.status = { $in: [0, 2] }, !await this.findOne(a)))
      return !0;
    a.group_id = o, delete a.status;
    const i = await this.findOne(a);
    return i || !1;
  }
  // async deleteBygroup_id($id) {
  // 	$database = self:: openConnection();
  // 	$query = "DELETE FROM permissions WHERE group_id = :id ";
  // 	$database -> prepare($query);
  // 	$database -> bindValue(':id', $id);
  // 	$database -> execute();
  // }
  // async uncheckBygroup_id(group_id: number, adminFunctionIds: number[]) {
  // 	if (adminFunctionIds.length) {
  // 		const res = await PermissionModel.model.deleteMany({ group_id, adminFunctionId: { $in: adminFunctionIds } });
  // 	} else {
  // 		const res = await PermissionModel.model.deleteMany({ group_id });
  // 	}
  // }
  async getFuncRole(t, e) {
    return se.isAdm(e) ? !0 : await this.findOne({ adminFunctionId: t, group_id: e });
  }
  async skipPermission(t) {
    return !![
      {
        module: "admin",
        controller: "users",
        action: "profile",
        code: 0
      },
      {
        module: "admin",
        controller: "users",
        action: "editProfile",
        code: 0
      },
      {
        module: "admin",
        controller: "users",
        action: "changePassword",
        code: 0
      }
    ].includes(t);
  }
}
class Es extends T {
  constructor() {
    super(...arguments), this.table = "adminfunctions", this.vdObject = {
      name: "required|maxLen(100)",
      url: "required|maxLen(100)",
      module: "required|maxLen(100)",
      controller: "required|maxLen(100)",
      action: "required|maxLen(100)"
    }, this.validateImport = {
      name: "required|maxLen(100)",
      url: "required|maxLen(100)",
      module: "required|maxLen(100)",
      controller: "required|maxLen(100)",
      action: "required|maxLen(100)"
    };
  }
  fieldName(t) {
    return {
      name: "Tiêu đề",
      url: "Đường dẫn",
      module: "Module",
      controller: "Controller",
      action: "Action",
      status: "Trạng thái"
    }[t] ?? t;
  }
  async getDatas(t, e = !1) {
    t.get("nameSh"), t.get("statusSh", -1);
    let s;
    return s.items = await this.getTree(), s;
  }
  // async getTree(params: any = {}, prId: any = 0, data: any[] = [], tag = '', symbol = '__') {
  //     params.parent_id = prId;
  //     const tagN = tag ? tag + ' ' : '';
  //     const childs = await this.findItems(params, { sort_order: 'ASC' });
  //     if (childs.length) {
  //         tag += symbol;
  //         for (const child of childs) {
  //             child.nameFilter = tagN + child.name;
  //             data.push(child);
  //             data = await this.getTree(params, child.id, data, tag);
  //         }
  //     }
  //     return data;
  // }
  async getTree(t = {}, e = 0, s = [], r = "", o = "__") {
    t.parent_id = e;
    const n = r ? r + " " : "";
    let a = "1";
    const i = [];
    for (const d in t)
      Object.prototype.hasOwnProperty.call(t, d) && i.push(`${d} = ${typeof t[d] == "string" ? `'${t[d]}'` : t[d]}`);
    i.length && (a = i.join(" AND "));
    const c = await this.find(
      a,
      { sort_order: "ASC" },
      !1
    );
    if (c.length) {
      r += o;
      for (const d of c)
        d.nameFilter = n + d.name, s.push(d), s = await this.getTree(t, d.id, s, r, o);
    }
    return s;
  }
  // async getSubData(id: number, dId = 0, params: any = {}) {
  //     params.parent_id = id;
  //     if (dId > 0) params.id = { not: dId };
  //     return await this.findItems(params, { sort_order: 'ASC' });
  // }
  async getSubData(t, e = 0, s = {}) {
    s.parent_id = t, e > 0 && (s.id = { not: e });
    let r = "1";
    const o = [];
    for (const a in s)
      if (Object.prototype.hasOwnProperty.call(s, a)) {
        const i = s[a];
        if (a === "id" && typeof i == "object" && i.not)
          o.push(`id != ${Number(i.not)}`);
        else {
          const c = typeof i == "string" ? `'${i}'` : i;
          o.push(`${a} = ${c}`);
        }
      }
    return o.length && (r = o.join(" AND ")), await this.find(
      r,
      { sort_order: "ASC" },
      !1
    );
  }
  async getFuncMenu(t, e = 0, s = 0) {
    const r = [];
    if (s >= 10)
      return [];
    const o = await this.getSubData(e, 0, { status: { not: 0 } });
    for await (const n of o)
      if (await new Nt(this.pool).getFuncRole(n.id, t)) {
        const i = { ...n };
        s += 1;
        const c = await this.getFuncMenu(t, i.id, s);
        c.length && (i.subs = c), r.push(i);
      }
    return r;
  }
  async getPermissonMenu(t, e = 0, s = 0) {
    const r = [];
    if (s >= 10)
      return [];
    const o = await this.getSubData(e, 0);
    for await (const n of o) {
      const a = { ...n };
      if (n.status === 1)
        a.isPer = !0;
      else {
        const c = new Nt(this.pool);
        a.isPer = !!await c.getFuncRole(n.id, t);
      }
      const i = await this.getPermissonMenu(t, a.id, s + 1);
      i.length > 0 && (a.subs = i), r.push(a);
    }
    return r;
  }
  // async getFunctionIds(group_id: number) {/// sửa lại chỗ này
  //     const permission = new PermissionModel(this.pool)
  //     const permissions: any[] = await permission.findItems({ group_id }, false, false, false, 10000);
  //     return permissions.length ? permissions.map(item => item.adminFunctionId) : [];
  // }
  async getFunctionIds(t) {
    const e = new Nt(this.pool), s = `group_id = ${t}`, r = await e.find(
      s,
      !1,
      !1,
      void 0,
      "adminFunctionId"
    );
    return r.length ? r.map((o) => o.adminFunctionId) : [];
  }
}
class Ds extends T {
  constructor() {
    super(...arguments), this.table = "user_forgets";
  }
}
class Mt extends T {
  constructor() {
    super(...arguments), this.table = "logs", this.vdObject = {
      userid: "required",
      typeid: "required",
      name: "required|maxLen(100)",
      controller: "required|maxLen(150)",
      action: "required|maxLen(150)",
      ip: "maxLen(36)",
      device: "maxLen(150)",
      browser: "maxLen(50)",
      os: "maxLen(50)"
    };
  }
  fieldName(t) {
    return {
      userid: "Người dùng ID",
      deptid: "Phòng ban ID",
      type: "Loại thao tác",
      name: "Tên thao tác",
      controller: "Controller",
      action: "Action",
      paramid: "ID tham số",
      params: "Tham số",
      difference: "Nội dung khác",
      item: "Nội dung mới",
      ip: "Địa chỉ IP",
      device: "Thiết bị",
      browser: "Trình duyệt",
      os: "Hệ điều hành",
      created_at: "Thời gian tạo"
    }[t] ?? t;
  }
  static getTypeName(t, e, s) {
    switch (t) {
      case 1:
        return "Thêm mới " + e + " ID: " + s;
      case 2:
        return "Chỉnh sửa " + e + " ID: " + s;
      case 3:
        return "Xóa " + e + " ID: " + s;
      case 4:
        return "Đăng nhập";
      // default: return "other";
      default:
        return "";
    }
  }
  // static async getDatas(request: Request, user: any, is_deleted: any) {
  //     let params: any = {};
  //     let nameSh = request.get('nameSh');
  //     if (nameSh) {
  //         let keyword = Common.removeVietnameseTones(nameSh);
  //         params.fullnameSearch = { $regex: keyword, $options: "i" };
  //     }
  //     let typeidSh = request.get('typeidSh');
  //     if (typeidSh) {
  //         params.typeid = { $regex: typeidSh, $options: 'i' };
  //     }
  //     if (is_deleted === true || is_deleted === 0 || is_deleted === 'true') {
  //         params.is_deleted = 0;
  //     }
  //     const page = parseInt(request.get('page', '1'));
  //     const pageLen = parseInt(request.get('pageLen', '10'));
  //     let data = await this.findWithPagination(params, false, false, page, pageLen);
  //     return data;
  // }
  async saveLogs(t, e, s, r, o = {}, n = {}) {
    const a = s.req;
    let i = "", c = "", d = "", l = "";
    if (a) {
      i = a.headers["x-forwarded-for"] || a.ip || a.socket.remoteAddress || "";
      const w = a.headers["user-agent"] || "", E = new Re(w), D = E.getDevice(), S = E.getBrowser(), N = E.getOS();
      c = D.model || D.type || "", d = S.name || "", l = N.name || "";
    }
    o = { ...o }, n = { ...n };
    const u = ["updated_at", "created_at", "__v"], m = {};
    Object.keys(o).forEach((w) => {
      if (u.includes(w)) return;
      const E = n?.[w], D = o?.[w];
      E !== D && (m[w] = {
        old: E
      });
    });
    const g = Mt.getTypeName(e, r, o.id), I = {
      userid: t,
      typeid: e,
      name: g,
      nameSearch: M.removeVietnameseTones(g),
      controller: s.controller?.constructor?.name || "",
      action: s.action || "",
      itemid: o.id || 0,
      tableName: r,
      difference: JSON.stringify(m || {}),
      params: JSON.stringify(s.params || {}),
      item: JSON.stringify(o || {}),
      ip: i,
      device: c,
      browser: d,
      os: l,
      created_at: /* @__PURE__ */ new Date(),
      updated_at: /* @__PURE__ */ new Date()
    }, _ = new Mt(this.pool);
    return await _.vdSave(I, _.vdObject);
  }
}
class bs extends T {
  constructor() {
    super(...arguments), this.table = "customer_register", this.vdObject = {
      reference_code: "required|maxLen(10)",
      username: "required|maxLen(100)|unique(customer_register,username)",
      email: "required|unique(customer_register,email)|email",
      phone: "maxLen(20)|unique(customer_register,phone)|phoneVn",
      name: "maxLen(150)",
      avatar: "maxLen(256)",
      referral_code: "maxLen(15)"
    }, this.validateRegister = {
      name: "required|maxLen(200)",
      phone: "required|unique(customers,phone)|phoneVn"
      // captcha: "required|captcha",
    }, this.validateCreate = {
      name: "required|maxLen(200)",
      // email: 'required|unique(customer_register,email)|email',
      phone: "required|unique(customers,phone)|phoneVn"
    };
  }
  fieldName(t) {
    return {
      google_id: "Google ID",
      facebook_id: "Facebook ID",
      apple_id: "Apple ID",
      phone: "Số điện thoại",
      username: "Tên đăng nhập",
      email: "Email",
      name: "Họ & tên",
      avatar: "Ảnh đại diện",
      reference_code: "Mã đăng ký",
      referral_code: "Mã giới thiệu",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("emailSh"), n = t.get("phoneSh"), a = [];
    if (r) {
      const u = `%${r}%`;
      a.push(`customer_register.name LIKE '${u}'`);
    }
    if (o) {
      const u = `% ${o}% `;
      a.push(`customer_register.email LIKE '${u}'`);
    }
    if (n) {
      const u = `% ${n}% `;
      a.push(`customer_register.phone LIKE '${u}'`);
    }
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "customer_register.created_at": "DESC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
  async createItem(t, e = null, s = null) {
    const r = t.phone || 0;
    let o = await this.findOne({ phone: r });
    return o || (o = {
      phone: r,
      google_id: e,
      facebook_id: s,
      created_at: M.dateNow()
    }), o.google_id = o.google_id || e, o.facebook_id = o.facebook_id || s, o.name = t.name, o.email = t.email || "", o.referral_code = t.referral_code || "", o.avatar = t.avatar || "", o.reference_code = Math.floor(Math.random() * 9e5) + 1e5, o.updated_at = M.dateNow(), await this.vdSave(o, this.validateCreate);
  }
  async createByUser(t) {
    const e = {}, s = t.username || "", r = t.fullname || "", o = t.email || "";
    e.phone = s;
    const n = await this.findOne(e);
    if (!n || n.name !== r || n.email !== o) {
      n?.id && await this.deleteOne({ id: n.id });
      const a = {
        phone: s,
        name: r,
        email: o,
        created_at: M.dateNow(),
        // giờ Việt Nam chuẩn
        updated_at: M.dateNow(),
        reference_code: Math.floor(Math.random() * 9e5) + 1e5
        // random 6 chữ số
        // avatar: Common.getValue([item], "avatar") // nếu muốn lưu avatar
      };
      return await this.vdSave(a, this.validateCreate);
    }
    return n;
  }
}
class Cs extends T {
  constructor() {
    super(...arguments), this.table = "customer_token", this.validateApiCreate = {
      // 'userId': 'required'
    };
  }
  fieldName(t) {
    return {
      session_id: "Mã phiên (session)",
      customer_id: "ID khách hàng",
      tier_id: "Hạng thành viên",
      fcm_token: "FCM Token",
      accessToken: "Access Token",
      refresh_token: "Refresh Token",
      chat_token: "Chat Token",
      // chat realtime
      expired_at: "Thời gian hết hạn (timestamp)"
    }[t] ?? t;
  }
  async createByCustomer(t, e, s = !1) {
    let r = !1;
    if (s) {
      const a = { customer_id: t.id, refreshToken: s };
      if (r = await this.findOne(a), !r) throw new Error("invalid_refresh_token");
      if (r.us !== e.headers["user-agent"]) throw new Error("invalid_refresh_token");
      if (r.expired_refresh_at < Date.now()) throw new Error("invalid_expired_refresh_token");
    } else
      r = {}, r.customer_id = t.id;
    const o = Number(process.env.JWT_TIMEOUT || 3600);
    if (r.expired_at = Date.now() + o * 500, r.expired_refresh_at = Date.now() + o * 1e3 * 24 * 7, r.access_token = te.createToken(t, e), r.refresh_token = Ee(), r.session_id = r.refresh_token, r.ip = e.ip, r.us = e.headers["user-agent"] || "unknown", !await this.vdSave(r, this.validateApiCreate)) throw new Error("invalid_save_customer_token");
    return r;
  }
  async refreshToken(t) {
    const s = te.verifyToken(t.req).sub, r = await t.findOne({ id: s, is_deleted: 0, status: 1 });
    if (!r) throw new Error("invalid_user_accessToken");
    const o = t.req.cookies?.refreshToken;
    if (!o) throw new Error("invalid_refresh_token");
    return await t.createByCustomer(r, t.req, t.db, o);
  }
}
class Ts extends T {
  constructor() {
    super(...arguments), this.table = "customer_forget", this.vdObject = {
      reference_code: "required|maxLen(10)",
      email: "email|maxLen(100)",
      phone: "maxLen(20)",
      referral_code: "maxLen(15)",
      created_at: "",
      updated_at: ""
    };
  }
  fieldName(t) {
    return {
      email: "Email",
      phone: "Số điện thoại",
      reference_code: "Mã đăng ký",
      referral_code: "Mã giới thiệu",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("emailSh"), o = t.get("phoneSh"), n = t.get("refCodeSh"), a = [];
    if (r) {
      const u = `%${r}%`;
      a.push(`customer_forget.email LIKE '${u}'`);
    }
    if (o) {
      const u = `%${o}%`;
      a.push(`customer_forget.phone LIKE '${u}'`);
    }
    if (n) {
      const u = `%${n}%`;
      a.push(`customer_forget.reference_code LIKE '${u}'`);
    }
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "customer_forget.created_at": "DESC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
}
class Ls extends T {
  constructor() {
    super(...arguments), this.table = "configs", this.vdObject = {
      key: "required|minLen(2)|maxLen(255)|unique(configs,key)",
      type: "integer"
    };
  }
  fieldName(t) {
    return {
      id: "ID Cấu hình",
      type: "Loại cấu hình",
      key: "Khóa (Key)",
      value: "Giá trị (Value)"
    }[t] ?? t;
  }
  async getValueByKey(t) {
    const e = await this.findOne({ key: t });
    return e ? e.value : null;
  }
  async updateValueByKey(t, e) {
    const s = await this.findOne({ key: t });
    return s ? await this.update(s.id, { value: e }) > 0 : (await this.insert({
      key: t,
      value: e,
      type: 0
    }), !0);
  }
}
class ks extends T {
  constructor() {
    super(...arguments), this.table = "menus", this.vdObject = {
      name: "required|minLen(2)|maxLen(100)",
      store_id: "required|integer",
      icon: "maxLen(50)",
      param: "maxLen(200)",
      sort_order: "integer",
      is_mega: "numeric|min(0)|max(1)",
      is_icon: "numeric|min(0)|max(1)",
      status: "numeric|min(0)|max(1)",
      type: "integer",
      parent_id: "integer",
      menu_type: "required|integer"
    };
  }
  fieldName(t) {
    return {
      id: "ID Menu",
      store_id: "ID Cửa hàng",
      name: "Tên Menu",
      icon: "Icon (biểu tượng)",
      param: "Tham số/Đường dẫn",
      sort_order: "Thứ tự sắp xếp",
      is_mega: "Mega Menu",
      is_icon: "Hiển thị Icon",
      type: "Loại liên kết (Link type)",
      parent_id: "ID Menu cha",
      menu_type: "Phân loại Menu (Header/Footer/Sidebar)",
      status: "Trạng thái",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  // async getSubData(id: number, dId = 0, params: any = {}) {
  //     params.parent_id = id;
  //     if (dId > 0) params.id = { not: dId };
  //     return await this.findItems(params, { sort_order: 'ASC' });
  // }
  async getSubData(t, e = 0, s = {}) {
    const r = { ...s };
    r.parent_id = t, e > 0 && (r.id = { not: e });
    let o = "";
    const n = [];
    for (const i in r)
      if (Object.prototype.hasOwnProperty.call(r, i)) {
        const c = r[i];
        if (typeof c == "object" && c !== null)
          c.not !== void 0 && n.push(`${i} != ${Number(c.not)}`);
        else {
          const d = typeof c == "string" ? `'${c}'` : c;
          n.push(`${i} = ${d}`);
        }
      }
    return n.length ? o = n.join(" AND ") : o = "1", await this.find(
      o,
      { sort_order: "ASC" },
      !1
    );
  }
  // async getSubIds(id: number, filter: any = {}, data: number[] = []): Promise<number[]> {
  //     filter.parent_id = id;
  //     filter.isdeleted = 0;
  //     const children = await this.findItems(filter);
  //     for (const child of children) {
  //         data.push(child.id);
  //         filter.parent_id = child.id;
  //         data = await this.getSubIds(child.id, filter, data);
  //     }
  //     return data;
  // }
  async getSubIds(t, e = {}, s = []) {
    const r = { ...e };
    r.parent_id = t, r.isdeleted = 0;
    let o = "";
    const n = [];
    for (const i in r)
      if (Object.prototype.hasOwnProperty.call(r, i)) {
        const c = r[i];
        if (typeof c == "object" && c !== null)
          c.not !== void 0 && n.push(`${i} != ${Number(c.not)}`);
        else {
          const d = typeof c == "string" ? `'${c}'` : c;
          n.push(`${i} = ${d}`);
        }
      }
    n.length ? o = n.join(" AND ") : o = "1";
    const a = await this.find(
      o,
      !1,
      !1,
      void 0,
      "id"
    );
    for (const i of a)
      i.id && (s.push(i.id), s = await this.getSubIds(i.id, r, s));
    return s;
  }
  async getMenuTree(t = 0, e) {
    const s = new Ot(this.pool), r = new oe(this.pool), o = { status: { not: 0 } };
    e && (o.menu_type = e);
    const a = (await this.getSubData(t, 0, o)).map(async (c) => {
      const d = { ...c };
      if ((d.type === 1 || d.type === 2) && d.param) {
        const u = parseInt(d.param, 10);
        if (!isNaN(u) && u > 0) {
          let m = null;
          if (d.type === 1 ? m = s : d.type === 2 && (m = r), m)
            try {
              const g = await m.findOne({ id: u });
              g && g.alias && (d.alias = g.alias);
            } catch (g) {
              console.error(`Lỗi khi lấy alias cho type ${d.type} ID ${u}:`, g);
            }
        }
      }
      const l = await this.getMenuTree(d.id, e);
      return l.length && (d.subs = l), d;
    });
    return await Promise.all(a);
  }
  async getDatas(t, e) {
    const s = t.get("nameSh"), r = t.get("statusSh"), o = t.get("typeSh"), n = t.get("menuTypeSh"), a = [];
    if (s) {
      const u = `%${s}%`;
      a.push(`menus.name LIKE '${u}'`);
    }
    r != null && r !== "" && a.push(`menus.status = ${Number(r)} `), o != null && o !== "" && a.push(`menus.type = ${Number(o)} `), n != null && n !== "" && a.push(`menus.menu_type = ${Number(n)} `), e && e.store_id ? a.push(`menus.store_id = ${e.store_id} `) : a.push("menus.store_id = 1");
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "menus.parent_id": "ASC", "menus.sort_order": "ASC", "menus.created_at": "ASC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
}
class qs extends T {
  constructor() {
    super(...arguments), this.table = "menu_type", this.vdObject = {
      name: "required|minLen(2)|maxLen(150)|unique(menu_type,name)",
      store_id: "integer",
      sort_order: "integer",
      status: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Loại Menu",
      store_id: "ID Cửa hàng",
      name: "Tên Loại Menu",
      status: "Trạng thái",
      sort_order: "Thứ tự sắp xếp",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e) {
    const s = t.get("nameSh"), r = t.get("statusSh"), o = [];
    if (s) {
      const d = `%${s}%`;
      o.push(`menu_type.name LIKE '${d}'`);
    }
    r != null && r !== "" && o.push(`menu_type.status = ${Number(r)} `), e && e.store_id && o.push(`menu_type.store_id = ${e.store_id} `);
    const n = o.length ? o.join(" AND ") : "1", a = parseInt(t.get("page", "1")), i = parseInt(t.get("pageLen", "10")), c = await this.findWithPagination(
      n,
      { "menu_type.sort_order": "ASC", "menu_type.created_at": "ASC" },
      a,
      i
    );
    return {
      page: c.page,
      pageLen: c.length,
      pageTotal: c.pageTotal,
      recordTotal: c.recordTotal,
      data: c.items
    };
  }
}
class Ns extends T {
  constructor() {
    super(...arguments), this.table = "pages", this.vdObject = {
      alias: "required|minLen(2)|maxLen(150)|unique(pages,alias)",
      store_id: "required|integer",
      name: "required|minLen(2)|maxLen(150)",
      description: "maxLen(250)",
      meta_title: "maxLen(250)",
      meta_keywords: "maxLen(250)",
      meta_description: "maxLen(250)",
      temp_id: "integer",
      sort_order: "integer",
      status: "required|numeric|min(0)|max(1)",
      is_home: "numeric|min(0)|max(1)",
      is_login: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Trang",
      alias: "Đường dẫn (Alias)",
      store_id: "ID Cửa hàng",
      name: "Tên Trang",
      description: "Mô tả ngắn",
      meta_title: "Meta Title",
      meta_keywords: "Meta Keywords",
      meta_description: "Meta Description",
      temp_id: "ID Template",
      params: "Tham số cấu hình",
      sort_order: "Thứ tự sắp xếp",
      status: "Trạng thái",
      is_home: "Là Trang chủ",
      is_login: "Yêu cầu Đăng nhập",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = t.get("isHomeSh"), a = [];
    if (r) {
      const u = `%${r}%`;
      a.push(`pages.name LIKE '${u}'`);
    }
    o != null && o !== "" && a.push(`pages.status = ${Number(o)} `), n != null && n !== "" && a.push(`pages.is_home = ${Number(n)} `);
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "pages.sort_order": "ASC", "pages.id": "ASC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
}
class As extends T {
  constructor() {
    super(...arguments), this.table = "banners", this.vdObject = {
      name: "required|minLen(2)|maxLen(150)|unique(banners,name)",
      description: "maxLen(250)",
      button_link: "maxLen(250)",
      button_name: "maxLen(50)",
      sale_name: "maxLen(100)",
      sale_value: "maxLen(50)",
      image: "maxLen(250)",
      sort_order: "integer"
    };
  }
  fieldName(t) {
    return {
      id: "ID Banner",
      name: "Tên Banner",
      description: "Mô tả Banner",
      button_link: "Liên kết nút",
      button_name: "Tên nút (Button)",
      sale_name: "Tên khuyến mãi",
      sale_value: "Giá trị khuyến mãi",
      image: "Hình ảnh Banner",
      sort_order: "Thứ tự sắp xếp",
      status: "Trạng thái",
      is_deleted: "Đã xóa",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("nameSh"), o = t.get("statusSh"), n = [];
    if (r) {
      const g = `%${r}%`;
      n.push(`banners.name LIKE '${g}'`);
    }
    o && n.push(`banners.status = ${Number(o)} `), (s === !0 || s === 0 || s === "true") && n.push("banners.is_deleted = 0");
    const a = n.length ? n.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = t.get("limit"), d = parseInt(t.get("pageLen", "10")), l = c ? parseInt(c) : d, u = Math.max(1, l), m = await this.findWithPagination(
      a,
      { "banners.created_at": "DESC" },
      i,
      u
    );
    return {
      page: m.page,
      pageLen: u,
      pageTotal: m.pageTotal,
      recordTotal: m.recordTotal,
      data: m.items
    };
  }
}
class xs extends T {
  constructor() {
    super(...arguments), this.table = "product_reviews", this.vdObject = {
      store_id: "required|number",
      customer_id: "required|number",
      order_store_id: "required|number",
      order_id: "required|number",
      order_item_id: "required|number",
      product_id: "required|number",
      product_price_id: "required|number",
      point: "required|number|minVal(0)|maxVal(5)",
      des: "maxLen(5000)",
      status: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      store_id: "ID Cửa hàng",
      customer_id: "ID Khách hàng",
      order_store_id: "ID Đơn hàng Cửa hàng",
      order_id: "ID Đơn hàng",
      order_item_id: "ID Chi tiết Đơn hàng",
      product_id: "ID Sản phẩm",
      product_price_id: "ID Giá sản phẩm",
      fullname: "Họ tên",
      avatar: "Avatar",
      point: "Điểm đánh giá",
      des: "Nội dung đánh giá",
      images: "Hình ảnh",
      status: "Trạng thái",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t) {
    const e = t.get("productIdSh"), s = t.get("statusSh"), r = t.get("customerIdSh"), o = t.get("desSh"), n = t.get("store_idSh"), a = [];
    if (e && a.push(`product_reviews.product_id = ${Number(e)}`), s && a.push(`product_reviews.status = ${Number(s)}`), r && a.push(`product_reviews.customer_id = ${Number(r)}`), o) {
      const u = `%${o}%`;
      a.push(`product_reviews.des LIKE '${u}'`);
    }
    n && a.push(`product_reviews.store_id = ${Number(n)} `);
    const i = a.length ? a.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = await this.findWithPagination(
      i,
      { "product_reviews.created_at": "DESC" },
      c,
      d
    );
    return {
      page: l.page,
      pageLen: l.length,
      pageTotal: l.pageTotal,
      recordTotal: l.recordTotal,
      data: l.items
    };
  }
}
class Os extends T {
  constructor() {
    super(...arguments), this.table = "product_reviews_reply", this.vdObject = {
      product_review_id: "required|number",
      content: "required|minLen(1)|maxLen(1000)",
      status: "number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      product_review_id: "ID Đánh giá sản phẩm",
      content: "Nội dung phản hồi",
      status: "Trạng thái",
      created_at: "Thời gian tạo",
      updated_at: "Thời gian cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t) {
    const e = await t.get("reviewIdSh", [], "ids"), s = t.get("statusSh"), r = [];
    if (e.length > 0) {
      const c = e.join(", ");
      r.push(`product_reviews_reply.product_review_id IN (${c})`);
    }
    s && r.push(`product_reviews_reply.status = ${Number(s)}`);
    const o = r.length ? r.join(" AND ") : "1", n = parseInt(t.get("page", "1")), a = parseInt(t.get("pageLen", "10")), i = await this.findWithPagination(
      o,
      { "product_reviews_reply.created_at": "DESC" },
      n,
      a
    );
    return {
      page: i.page,
      pageLen: i.length,
      pageTotal: i.pageTotal,
      recordTotal: i.recordTotal,
      data: i.items
    };
  }
}
class Ms extends T {
  constructor() {
    super(...arguments), this.table = "voucher_invited", this.vdObject = {
      customer_id: "required|number",
      voucher_id: "required|number",
      quantity: "required|number|minVal(0)"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      customer_id: "ID Khách hàng",
      voucher_id: "ID Voucher",
      quantity: "Số lượng Voucher đã mời",
      created_at: "Thời gian tạo"
    }[t] ?? t;
  }
  async getDatas(t, e = !0) {
    const s = t.get("customerIdSh"), r = t.get("voucherIdSh"), o = [];
    s && o.push(`voucher_invited.customer_id = ${Number(s)}`), r && o.push(`voucher_invited.voucher_id = ${Number(r)}`);
    const n = o.length ? o.join(" AND ") : "1";
    if (e) {
      const a = parseInt(t.get("page", "1")), i = t.get("limit"), c = parseInt(t.get("pageLen", "10")), d = i ? parseInt(i) : c, l = Math.max(1, d), u = await this.findWithPagination(
        n,
        { "voucher_invited.created_at": "DESC" },
        d,
        a
      );
      return {
        page: u.page,
        pageLen: l,
        pageTotal: u.pageTotal,
        recordTotal: u.recordTotal,
        data: u.items
      };
    } else
      return await this.find(
        n,
        { "voucher_invited.created_at": "DESC" },
        !1,
        void 0,
        "*"
      );
  }
}
class $s extends T {
  constructor() {
    super(...arguments), this.table = "voucher_store_customer", this.vdObject = {
      customer_id: "required|number",
      voucher_id: "required|number",
      voucher_value: "required|number|minVal(0)",
      voucher_info: "required",
      order_id: "required|number"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      customer_id: "ID Khách hàng",
      voucher_id: "ID Voucher",
      voucher_value: "Giá trị Voucher",
      voucher_info: "Thông tin Voucher",
      order_id: "ID Đơn hàng áp dụng",
      created_at: "Thời gian áp dụng"
    }[t] ?? t;
  }
  async getDatas(t, e = !0) {
    const s = t.get("customerIdSh"), r = t.get("voucherIdSh"), o = t.get("orderIdSh"), n = [];
    s && n.push(`voucher_store_customer.customer_id = ${Number(s)}`), r && n.push(`voucher_store_customer.voucher_id = ${Number(r)}`), o && n.push(`voucher_store_customer.order_id = ${Number(o)}`);
    const a = n.length ? n.join(" AND ") : "1";
    if (e) {
      const i = parseInt(t.get("page", "1")), c = t.get("limit"), d = parseInt(t.get("pageLen", "10")), l = c ? parseInt(c) : d, u = Math.max(1, l), m = await this.findWithPagination(
        a,
        { "voucher_store_customer.created_at": "DESC" },
        l,
        i
      );
      return {
        page: m.page,
        pageLen: u,
        pageTotal: m.pageTotal,
        recordTotal: m.recordTotal,
        data: m.items
      };
    } else
      return await this.find(
        a,
        { "voucher_store_customer.created_at": "DESC" },
        !1,
        void 0,
        "*"
      );
  }
  // public async getUsedQuantity(
  //     customerId: number,
  //     voucherId: number | undefined | null,
  //     productId?: number // Tùy chọn nếu giới hạn áp dụng theo sản phẩm
  // ): Promise<number> {
  //     if (voucherId === undefined || voucherId === null) {
  //         return 0; // Trả về 0 nếu không có ID KM hợp lệ
  //     }
  //     let quantityUsed = 0;
  //     // 1. Truy vấn dữ liệu từ bảng sử dụng voucher
  //     // Chúng ta cần lấy voucher_info (thường là JSON) để phân tích số lượng sản phẩm đã mua
  //     const sql = `
  //         SELECT 
  //             voucher_info 
  //         FROM 
  //             \`${this.table}\` t1 
  //         WHERE 
  //             t1.customer_id = ? 
  //             AND t1.voucher_id = ?
  //             -- Cần thêm điều kiện liên kết với đơn hàng đã hoàn tất nếu có
  //             AND t1.order_id IS NOT NULL 
  //     `;
  //     const values = [customerId, voucherId];
  //     const results: any[] = await this.query(sql, values);
  //     if (!results.length) {
  //         return 0; // Khách hàng chưa từng sử dụng
  //     }
  //     // 2. Phân tích kết quả để tính tổng số lượng
  //     for (const row of results) {
  //         try {
  //             // Giả định voucher_info chứa thông tin về số lượng sản phẩm đã mua
  //             const info = JSON.parse(row.voucher_info);
  //             // Nếu voucher_info lưu quantity:
  //             if (info.quantity) {
  //                 quantityUsed += parseInt(info.quantity);
  //             }
  //             // Hoặc nếu nó là danh sách sản phẩm/số lượng
  //             else if (Array.isArray(info.products)) {
  //                 for (const item of info.products) {
  //                     if (productId && item.product_id === productId) {
  //                         quantityUsed += parseInt(item.quantity);
  //                     } else if (!productId) {
  //                         // Nếu giới hạn là trên toàn bộ voucher, cộng tổng số lượng sản phẩm
  //                         quantityUsed += parseInt(item.quantity);
  //                     }
  //                 }
  //             }
  //         } catch (e) {
  //             console.error("Lỗi parse voucher_info:", e);
  //             // Bỏ qua bản ghi lỗi
  //         }
  //     }
  //     return quantityUsed;
  // }
  // Trong VoucherStoreCustomerModel.ts (Sử dụng bảng orders và order_items)
  async getUsedQuantity(t, e, s) {
    const r = `
        SELECT 
            SUM(t3.quantity) AS itemsUsedTotal  /* TÍNH TỔNG QUANTITY ĐÃ MUA */
        FROM 
            voucher_store_customer t1 
        INNER JOIN 
            orders t2 ON t1.order_id = t2.id /* Lấy ID khách hàng từ bảng orders */
        INNER JOIN 
            order_items t3 ON t1.order_id = t3.order_id /* Lấy số lượng sản phẩm */
        WHERE 
            t2.customer_id = ? 
            AND t1.voucher_id = ? /* Voucher ID (hoặc promotion_id) */
            AND t3.product_id = ? /* Lọc theo sản phẩm nếu giới hạn là trên từng SP */
            AND t2.status = 'COMPLETED' /* Tùy chọn: chỉ tính đơn hàng hoàn thành */
    `, o = [t, e, s], [[n]] = await this.query(r, o);
    return parseInt(n.itemsUsedTotal) || 0;
  }
}
class Js extends T {
  constructor() {
    super(...arguments), this.table = "advertisements", this.vdObject = {
      name: "required|minLen(5)|maxLen(150)",
      image: "required|maxLen(250)",
      status: "required|numeric",
      button_link: "maxLen(250)"
    };
  }
  fieldName(t) {
    return {
      name: "Tên quảng cáo",
      description: "Mô tả",
      image: "Hình ảnh",
      button_link: "Liên kết nút",
      button_name: "Tên nút",
      sale_name: "Tên ưu đãi",
      status: "Trạng thái",
      created_at: "Thời gian tạo"
    }[t] ?? t;
  }
  async getDatas(t, e) {
    const s = t.get("nameSh"), r = t.get("statusSh"), o = [];
    if (s) {
      const m = `%${s}%`;
      o.push(`(advertisements.name LIKE '${m}' OR advertisements.description LIKE '${m}')`);
    }
    r && o.push(`advertisements.status = ${Number(r)}`);
    const n = o.length ? o.join(" AND ") : "1", a = parseInt(t.get("page", "1")), i = t.get("limit"), c = parseInt(t.get("pageLen", "10")), d = i ? parseInt(i) : c, l = Math.max(1, d), u = await this.findWithPagination(
      n,
      { "advertisements.created_at": "DESC" },
      a,
      l
    );
    return {
      page: u.page,
      pageLen: l,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Rs extends T {
  constructor() {
    super(...arguments), this.table = "order_item", this.vdObject = {
      order_id: "required|number",
      order_store_id: "required|number",
      product_id: "required|number",
      product_price_id: "required|number",
      quantity: "required|number",
      price: "required|number",
      total: "required|number"
    };
  }
  fieldName(t) {
    return {
      order_id: "ID đơn hàng",
      order_store_id: "ID cửa hàng",
      product_id: "ID sản phẩm",
      product_price_id: "ID giá sản phẩm",
      product_seller_id: "ID người bán sản phẩm",
      seller_id: "ID người bán",
      name: "Tên sản phẩm",
      price: "Giá sản phẩm",
      expense: "Chi phí",
      quantity: "Số lượng",
      seller_discount: "Giảm giá người bán",
      total: "Tổng tiền",
      is_rate: "Đã đánh giá",
      promotion_id: "ID khuyến mãi",
      discount_value: "Giá trị giảm",
      discount_name: "Tên khuyến mãi",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      created_by: "Người tạo",
      updated_by: "Người cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = t.get("orderIdSh"), o = t.get("productIdSh"), n = [];
    r && n.push(`order_item.order_id = ${Number(r)}`), o && n.push(`order_item.product_id = ${Number(o)}`);
    const a = n.length ? n.join(" AND ") : "1", i = parseInt(t.get("page", "1")), c = parseInt(t.get("pageLen", "10")), d = await this.findWithPagination(
      a,
      { "order_item.created_at": "ASC" },
      i,
      c
    );
    return {
      page: d.page,
      pageLen: d.length,
      pageTotal: d.pageTotal,
      recordTotal: d.recordTotal,
      data: d.items
    };
  }
}
class Bs extends T {
  constructor() {
    super(...arguments), this.table = "order_item_more", this.vdObject = {
      customer_id: "integer",
      order_id: "integer",
      order_store_id: "required|integer|min(1)",
      order_item_id: "required|integer|min(1)",
      infos: "required"
    };
  }
  fieldName(t) {
    return {
      id: "ID Chi tiết thêm",
      customer_id: "ID Khách hàng",
      order_id: "ID Đơn hàng tổng",
      order_store_id: "ID Đơn hàng cửa hàng",
      order_item_id: "ID Chi tiết sản phẩm",
      infos: "Thông tin thêm"
    }[t] ?? t;
  }
  async getDatas(t) {
    const e = t.get("orderItemIdSh"), s = t.get("orderStoreIdSh"), r = [];
    e && r.push(`order_item_more.order_item_id = ${Number(e)}`), s && r.push(`order_item_more.order_store_id = ${Number(s)}`);
    const o = r.length ? r.join(" AND ") : "1", n = parseInt(t.get("page", "1")), a = parseInt(t.get("pageLen", "10")), i = Math.max(1, a), c = await this.findWithPagination(
      o,
      { "order_item_more.id": "DESC" },
      n,
      i
    );
    return {
      page: c.page,
      pageLen: i,
      pageTotal: c.pageTotal,
      recordTotal: c.recordTotal,
      data: c.items
    };
  }
}
class js extends T {
  constructor() {
    super(...arguments), this.table = "orders", this.vdObject = {
      order_type: "numeric|min(1)",
      customer_id: "integer|min(0)",
      fullname: "required|maxLen(150)",
      phone: "required|maxLen(50)",
      email: "maxLen(150)|email",
      address_id: "integer",
      country_id: "maxLen(10)",
      province_id: "maxLen(10)",
      district_id: "maxLen(10)",
      ward_id: "maxLen(10)",
      address: "maxLen(255)",
      payment_method_id: "numeric",
      received_method: "numeric",
      item_total: "numeric|min(0)",
      shipping: "numeric|min(0)",
      voucher_value: "numeric|min(0)",
      voucher_store_value: "numeric|min(0)",
      bank_expense: "numeric|min(0)",
      total: "numeric|min(0)",
      status: "numeric|min(0)|max(9)",
      is_deleted: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Đơn hàng",
      order_type: "Loại đơn hàng",
      customer_id: "ID Khách hàng",
      fullname: "Họ tên",
      phone: "Số điện thoại",
      email: "Email",
      address_id: "ID Địa chỉ nhận",
      fulladdress: "Địa chỉ đầy đủ",
      payment_method_id: "PT Thanh toán",
      received_method: "PT Nhận hàng",
      item_total: "Tổng tiền hàng",
      shipping: "Phí vận chuyển",
      voucher_value: "Giá trị Voucher chung",
      voucher_store_value: "Giá trị Voucher Cửa hàng",
      bank_expense: "Phí ngân hàng",
      total: "Tổng thanh toán",
      status: "Trạng thái",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật",
      received_at: "Ngày nhận đơn",
      delivered_at: "Ngày giao hàng"
    }[t] ?? t;
  }
  async getDatas(t, e = 0) {
    const s = t.get("customerIdSh"), r = t.get("statusSh"), o = t.get("orderIdSh"), n = t.get("phoneSh"), a = [];
    o && a.push(`orders.id = ${Number(o)}`), s && a.push(`orders.customer_id = ${Number(s)}`), n && a.push(`orders.phone LIKE '%${n}%'`), r != null && r !== "" && a.push(`orders.status = ${Number(r)}`);
    const i = String(e);
    i === "0" || i === "false" ? a.push("orders.is_deleted = 0") : (i === "1" || i === "true") && a.push("orders.is_deleted = 1");
    const c = a.length ? a.join(" AND ") : "1", d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = Math.max(1, l), m = await this.findWithPagination(
      c,
      { "orders.id": "DESC" },
      d,
      u
    );
    return {
      page: m.page,
      pageLen: u,
      pageTotal: m.pageTotal,
      recordTotal: m.recordTotal,
      data: m.items
    };
  }
}
class Fs extends T {
  constructor() {
    super(...arguments), this.table = "order_paymented", this.vdObject = {
      order_id: "required|integer|min(1)",
      customer_id: "required|integer|min(1)",
      payment_method_id: "required|numeric|min(1)",
      payment_info: "required",
      amount: "numeric|min(0)",
      stop: "numeric|min(0)|max(1)",
      status: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Thanh toán",
      order_id: "ID Đơn hàng",
      customer_id: "ID Khách hàng",
      payment_method_id: "PT Thanh toán",
      payment_info: "Thông tin thanh toán",
      amount: "Số tiền thanh toán",
      stop: "Ngừng thanh toán",
      status: "Trạng thái",
      created_at: "Ngày tạo",
      updated_at: "Ngày cập nhật"
    }[t] ?? t;
  }
  async getDatas(t, e = 0) {
    const s = t.get("orderIdSh"), r = t.get("customerIdSh"), o = t.get("statusSh"), n = [];
    s && n.push(`order_paymented.order_id = ${Number(s)}`), r && n.push(`order_paymented.customer_id = ${Number(r)}`), o != null && o !== "" && n.push(`order_paymented.status = ${Number(o)}`);
    const a = String(e);
    a === "0" || a === "false" ? n.push("order_paymented.stop = 0") : (a === "1" || a === "true") && n.push("order_paymented.stop = 1");
    const i = n.length ? n.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = Math.max(1, d), u = await this.findWithPagination(
      i,
      { "order_paymented.created_at": "DESC" },
      c,
      l
    );
    return {
      page: u.page,
      pageLen: l,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Vs extends T {
  constructor() {
    super(...arguments), this.table = "order_store", this.vdObject = {
      order_id: "required|integer|min(1)",
      store_id: "required|integer|min(1)",
      order_type: "numeric|min(1)",
      customer_id: "integer|min(0)",
      fullname: "maxLen(150)",
      phone: "maxLen(50)",
      email: "maxLen(150)|email",
      item_total: "numeric|min(0)",
      total: "numeric|min(0)",
      shipping: "numeric|min(0)",
      status: "numeric|min(0)",
      is_deleted: "numeric|min(0)|max(1)"
    };
  }
  fieldName(t) {
    return {
      id: "ID Đơn hàng Cửa hàng",
      order_id: "ID Đơn hàng tổng",
      store_id: "ID Cửa hàng",
      store_name: "Tên Cửa hàng",
      item_total: "Tổng tiền hàng",
      shipping: "Phí vận chuyển",
      voucher_value: "Giá trị Voucher Store",
      total: "Tổng thanh toán Store",
      status: "Trạng thái Store",
      created_at: "Ngày tạo",
      delivered_at: "Ngày giao hàng",
      cancel_comment: "Lý do hủy"
    }[t] ?? t;
  }
  async getDatas(t, e = 0) {
    const s = t.get("storeIdSh"), r = t.get("orderIdSh"), o = t.get("statusSh"), n = [];
    s && n.push(`order_store.store_id = ${Number(s)}`), r && n.push(`order_store.order_id = ${Number(r)}`), o != null && o !== "" && n.push(`order_store.status = ${Number(o)}`);
    const a = String(e);
    a === "0" || a === "false" ? n.push("order_store.is_deleted = 0") : (a === "1" || a === "true") && n.push("order_store.is_deleted = 1");
    const i = n.length ? n.join(" AND ") : "1", c = parseInt(t.get("page", "1")), d = parseInt(t.get("pageLen", "10")), l = Math.max(1, d), u = await this.findWithPagination(
      i,
      { "order_store.id": "DESC" },
      c,
      l
    );
    return {
      page: u.page,
      pageLen: l,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Ws extends T {
  constructor() {
    super(...arguments), this.table = "districts", this.vdObject = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      name_en: "maxLen(255)",
      full_name: "maxLen(255)",
      code_name: "maxLen(255)",
      province_code: "required|maxLen(20)",
      administrative_unit_id: "numeric"
    }, this.validateImport = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      province_code: "required|maxLen(20)"
    };
  }
  fieldName(t) {
    return {
      code: "Mã Quận/Huyện",
      name: "Tên Quận/Huyện",
      full_name: "Tên đầy đủ",
      province_code: "Mã Tỉnh/Thành phố",
      administrative_unit_id: "ID Đơn vị HC",
      status: "Trạng thái"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = [], n = t.get("nameSh");
    if (n) {
      const m = `%${n}%`;
      r.push(`name LIKE '${m}'`);
    }
    const a = t.get("provinceCodeSh");
    a && (r.push("province_code = ?"), o.push(a));
    const i = t.get("statusSh");
    i != null && (r.push("status = ?"), o.push(i));
    const c = r.length > 0 ? r.join(" AND ") : "1", d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      c,
      { code: "ASC" },
      d,
      l,
      o
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Ks extends T {
  constructor() {
    super(...arguments), this.table = "countries", this.vdObject = {
      name: "required|maxLen(100)",
      iso3: "maxLen(3)",
      numeric_code: "maxLen(3)",
      iso2: "maxLen(2)",
      phonecode: "maxLen(255)",
      capital: "maxLen(255)",
      currency: "maxLen(255)",
      currency_name: "maxLen(255)",
      currency_symbol: "maxLen(255)",
      tld: "maxLen(255)",
      native: "maxLen(255)",
      region: "maxLen(255)",
      subregion: "maxLen(255)",
      wikiDataId: "maxLen(255)",
      order_sort: "numeric",
      status: "numeric",
      flag: "numeric"
    }, this.validateImport = {
      name: "required|maxLen(100)",
      iso2: "maxLen(2)",
      iso3: "maxLen(3)",
      numeric_code: "maxLen(3)"
    };
  }
  fieldName(t) {
    return {
      id: "ID",
      name: "Tên Quốc gia",
      iso2: "Mã ISO2",
      iso3: "Mã ISO3",
      numeric_code: "Mã số",
      phonecode: "Mã điện thoại",
      capital: "Thủ đô",
      currency: "Mã tiền tệ",
      currency_name: "Tên tiền tệ",
      region: "Vùng",
      subregion: "Tiểu vùng",
      status: "Trạng thái",
      order_sort: "Thứ tự sắp xếp"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = [], n = t.get("nameSh");
    if (n) {
      const m = `%${n}%`;
      r.push(`name LIKE '${m}'`);
    }
    const a = t.get("iso2Sh");
    a && (r.push("iso2 = ?"), o.push(a));
    const i = t.get("statusSh");
    i != null && (r.push("status = ?"), o.push(i));
    const c = r.length > 0 ? r.join(" AND ") : "1", d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      c,
      { name: "ASC" },
      d,
      l,
      o
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Us extends T {
  constructor() {
    super(...arguments), this.table = "provinces", this.vdObject = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      name_en: "maxLen(255)",
      full_name: "required|maxLen(255)",
      code_name: "maxLen(255)",
      country_id: "required|numeric",
      administrative_unit_id: "numeric",
      administrative_region_id: "numeric"
    }, this.validateImport = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      country_id: "required|numeric"
    };
  }
  fieldName(t) {
    return {
      code: "Mã Tỉnh/Thành phố",
      name: "Tên Tỉnh/Thành phố",
      full_name: "Tên đầy đủ",
      country_id: "Mã Quốc gia",
      status: "Trạng thái"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = [], n = t.get("nameSh");
    if (n) {
      const m = `%${n}%`;
      r.push(`name LIKE '${m}'`);
    }
    const a = t.get("countryIdSh");
    a && (r.push("country_id = ?"), o.push(a));
    const i = t.get("statusSh");
    i != null && (r.push("status = ?"), o.push(i)), r.length === 0 && r.push("1");
    const c = r.join(" AND "), d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      c,
      { name: "ASC" },
      d,
      l,
      o
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
class Gs extends T {
  constructor() {
    super(...arguments), this.table = "wards", this.vdObject = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      name_en: "maxLen(255)",
      full_name: "maxLen(255)",
      code_name: "maxLen(255)",
      district_code: "maxLen(20)",
      administrative_unit_id: "numeric"
    }, this.validateImport = {
      code: "required|maxLen(20)",
      name: "required|maxLen(255)",
      district_code: "required|maxLen(20)"
    };
  }
  fieldName(t) {
    return {
      code: "Mã Phường/Xã",
      name: "Tên Phường/Xã",
      full_name: "Tên đầy đủ",
      district_code: "Mã Quận/Huyện",
      status: "Trạng thái"
    }[t] ?? t;
  }
  async getDatas(t, e, s) {
    const r = [], o = [], n = t.get("nameSh");
    if (n) {
      const m = `%${n}%`;
      r.push(`name LIKE '${m}'`);
    }
    const a = t.get("districtCodeSh");
    a && (r.push("district_code = ?"), o.push(a));
    const i = t.get("statusSh");
    i != null && (r.push("status = ?"), o.push(i)), r.length === 0 && r.push("1");
    const c = r.join(" AND "), d = parseInt(t.get("page", "1")), l = parseInt(t.get("pageLen", "10")), u = await this.findWithPagination(
      c,
      { name: "ASC" },
      d,
      l,
      o
    );
    return {
      page: u.page,
      pageLen: u.length,
      pageTotal: u.pageTotal,
      recordTotal: u.recordTotal,
      data: u.items
    };
  }
}
const Hs = be(async (h) => {
  const t = {
    user: new Ps(h.mysql),
    groups: new se(h.mysql),
    usertoken: new Ss(h.mysql),
    adminfunction: new Es(h.mysql),
    permission: new Nt(h.mysql),
    userforget: new Ds(h.mysql),
    dept: new De(h.mysql),
    logs: new Mt(h.mysql),
    customerRegister: new bs(h.mysql),
    customertoken: new Cs(h.mysql),
    customer: new qt(h.mysql),
    customerForget: new Ts(h.mysql),
    config: new Ls(h.mysql),
    menu: new ks(h.mysql),
    menuType: new qs(h.mysql),
    news: new Ot(h.mysql),
    newsCategory: new oe(h.mysql),
    pages: new Ns(h.mysql),
    banners: new As(h.mysql),
    products: new R(h.mysql),
    categories: new ee(h.mysql),
    packages: new dt(h.mysql),
    productReviews: new xs(h.mysql),
    productPrice: new tt(h.mysql),
    voucher: new U(h.mysql),
    productReviewReply: new Os(h.mysql),
    promotions: new lt(h.mysql),
    stores: new gt(h.mysql),
    voucherInvited: new Ms(h.mysql),
    voucherStore: new X(h.mysql),
    voucherStoreCustomer: new $s(h.mysql),
    advertisements: new Js(h.mysql),
    productPromotions: new xt(h.mysql),
    carts: new H(h.mysql),
    cartItem: new pt(h.mysql),
    orderItems: new Rs(h.mysql),
    orderItemMore: new Bs(h.mysql),
    order: new js(h.mysql),
    orderPaymented: new Fs(h.mysql),
    orderStore: new Vs(h.mysql),
    districts: new Ws(h.mysql),
    provinces: new Us(h.mysql),
    countries: new Ks(h.mysql),
    wards: new Gs(h.mysql)
  };
  h.decorate("models", t);
});
class Ys {
  static async run() {
    const t = Le({
      logger: !0
    });
    await t.register(Me, {
      origin: process.env.APP_URL ? process.env.APP_URL.split(",") : "*",
      credentials: !0
    }), await t.register(xe, {
      secret: "u4V$eP7#r1!q@Zx2M%tB^y9L&g0D*hN8sF+Wc3J=Rj?oK5pT|i>H<lA_Cvb6m",
      parseOptions: {}
    }), await t.register(Oe, {
      secret: "N5$zM!3wLkY#x9h&Q8fT^2u@oG7rV*jC4D=pJ?e%S1aB|iZ6H>R<yU_E+0nWvt",
      cookie: {
        httpOnly: !0,
        sameSite: "lax",
        secure: !1,
        path: "/"
      },
      saveUninitialized: !1,
      rolling: !0
    }), await t.register(Is), await t.register(Hs), await t.register(qe, { limits: { fileSize: 20 * 1024 * 1024 }, attachFieldsToBody: !1 }), await t.register(Ne, {
      root: J.join(J.resolve(), "public"),
      prefix: "/"
    }), await t.register(Ae);
    for await (const s of [...os, ...us, ...ps]) {
      const r = $t.getMethod(s);
      t.route({
        url: s.link,
        method: r,
        handler: async (o, n) => {
          try {
            const a = t.mysql, i = new s.controller(o, n, t, a);
            if (i[s.action] === void 0)
              throw new Error(`Cannot method ${s.action}`);
            const c = o.params.code;
            i.request = new z(o, n, a), i.module = s.modules, i.controller = s.controller, i.action = s.action, await i.request.start(), await i.autoload(), await i.beforeRouter(), o.params && c ? await i[s.action](c) : await i[s.action](), await i.request.end();
            return;
          } catch (a) {
            return n.code(400).send({ msg: a.message, status: 400 });
          }
        }
      });
    }
    t.setNotFoundHandler(async (s, r) => r.code(404).send({
      msg: `Cannot find ${s.method} ${s.url}`,
      status: 404
    })), (async () => {
      try {
        await t.listen({ port: Number(process.env.PORT || 3e3), host: "0.0.0.0" }), console.log("Start server success at port 3000");
      } catch (s) {
        t.log.error(s), process.exit(1);
      }
    })();
  }
}
Te.config({ override: !0 });
try {
  Ys.run();
} catch (h) {
  console.log(h.message);
}
