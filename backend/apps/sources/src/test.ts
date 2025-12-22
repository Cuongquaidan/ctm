// src/test.ts
const hello = (name: string): any => { // ❌ Kiểm tra no-explicit-any: đã tắt nên không báo lỗi
    // ❌ Kiểm tra semi: đã tắt nên không báo lỗi khi thiếu dấu chấm phẩy
    // const unusedVar = 10
    // const _ignoredVar = 20

    if (name) {
        return `Hello, ${name}`
    } else {
        console.log("This is unreachable") // ❌ Kiểm tra no-unreachable: phải báo lỗi
        return 'Hello'
    }
}

hello("World")