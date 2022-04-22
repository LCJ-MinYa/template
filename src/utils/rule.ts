/*
 * @Author: LiChaoJun
 * @Date: 2022-04-22 11:04:46
 * @LastEditTime: 2022-04-22 11:09:34
 * @LastEditors: LiChaoJun
 * @Description: rule校验规则
 */

/* eslint-disable */
export const trigger = `blur`;
export const change = `change`;
export const baseType = {
    string: `string`,
    number: `number`,
    boolean: `boolean`,
    method: `method`,
    regexp: `regexp`,
    integer: `integer`,
    float: `float`,
    array: `array`,
    object: `object`,
    enum: `enum`,
    date: `date`,
    url: `url`,
    hex: `hex`,
    email: `email`,
};
const emoji = /(\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F])/; // 验证是否输入特殊的表情符
//匹配规则
const validators = {
    // 不匹配
    validate: (rule: any, value: any, callback: Function) => {
        if (value && !rule.pattern.test(value)) {
            console.warn(rule);
            callback(new Error(rule.message));
        } else {
            callback();
        }
    },
    // 匹配
    newValidate: (rule: any, value: any, callback: Function) => {
        if (value && rule.pattern.test(value)) {
            console.warn(rule);
            callback(new Error(rule.message));
        } else {
            callback();
        }
    },
};
// 规则库
export const baseRules = {
    validate(rule: any, value: any, callback: Function) {
        if (value && !rule.pattern.test(value)) {
            console.warn(rule);
            callback(new Error(rule.message));
        } else {
            callback();
        }
    },
    // 特殊字符
    specialCharacters(message: string) {
        if (process.env.VUE_APP_ENCRYPTION == 1) {
            //安全校验时候校验输入特殊字符
            return {
                pattern: /[~！@#￥%……&*!$^&_\\']/im,
                validator: validators.newValidate,
                message: `${message}不能输入特殊字符`,
                trigger: 'change',
            };
        } else {
            return {};
        }
    },
    // 必填 选择框时间
    requireDate(message: string, type = baseType.date) {
        return {
            type: type,
            required: true,
            message: `请选择${message}`,
            trigger: change,
        };
    },
    // 必填 选择框字符串
    requireString(message: string, type = baseType.string) {
        return {
            type: type,
            required: true,
            message: `请选择${message}`,
            trigger: change,
        };
    },
    // 必填 字符串类型
    requireNumber(message: string, type = baseType.number) {
        return { type: type, required: true, message: `请输入${message}`, trigger };
    },
    // 必填 选择框数组类型
    requireArray(message: string, type = baseType.array) {
        return { type: type, required: true, message: `请选择${message}`, change };
    },
    // 必填 字符串类型
    required(message: string, type = baseType.string) {
        return { type: type, required: true, message: `请输入${message}`, trigger };
    },
    // 必填  没有类型限制
    require(message: string) {
        return { required: true, message: `请输入${message}`, trigger };
    },
    // 必填  没有类型限制
    requireClick(message: string) {
        return { required: true, message: `请上传${message}` };
    },
    // 必填  没有类型限制 选中后验证
    requireChange(message: string) {
        return { required: true, message: `请选择${message}`, change };
    },
    // 必填  没有类型限制 选中后验证 下拉框多选
    requireSelect(message: string, type = baseType.array) {
        return { type: type, required: true, message: `请选择${message}`, change };
    },
    // 必填  没有类型限制 选中后验证项目预算
    requireChangeFile(message: string) {
        return { required: true, message: `请上传${message}`, change };
    },
    // 必填  布尔验证
    booleanV(message: string, type = baseType.boolean) {
        return { type: type, required: true, message: `请输入${message}`, change };
    },
    // 金额
    money(message = '最大14位（12位整数，2位小数）') {
        return { pattern: /^\d{0,12}(\.\d{1,2})?$/, message: message, trigger };
    },
    // 名字
    name(message = '不能输入数字或特殊字符') {
        return {
            pattern: /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,
            message: message,
            trigger,
        };
    },
    // 利率
    interestRate(message = '最大6位（4位整数，2位小数）') {
        return {
            required: true,
            pattern: /^\d{0,4}(\.\d{1,2})?$/,
            message: message,
            trigger,
        };
    },
    // 邮箱正则
    email(message = '邮箱格式不正确', type = baseType.string) {
        // return { type: type, pattern: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, message: message, trigger }
        return {
            type: type,
            pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
            message: message,
            trigger,
        }; // eslint-disable-line
    },
    // 还款间隔日期
    dateTime(message = '长度2位，且必须为大于0的整数') {
        return {
            required: true,
            pattern: /^[1-9]{1,2}$/,
            message: message,
            trigger,
        };
    },
    // 还款期数
    issue(message = '不能超过360期') {
        return {
            required: true,
            pattern: /^([1-9][0-9]?|[1-2][0-9][0-9]|[3][0-5][0-9]|360)$/,
            message: message,
            trigger,
        };
    },
    // 身份证正则
    idCard(message = '身份证格式不对') {
        return {
            pattern:
                /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/,
            message: message,
            trigger,
        };
    },
    // // 银行卡正则
    // bankCard (message = '输入正确的银行卡号') {
    //   return { required: true, pattern: /^([1-9]{1})(\d{15}|\d{17})$/, message: message, trigger }
    // },
    // 银行卡正则 8-28位
    bankCard(message = '输入正确的银行卡号') {
        return {
            required: true,
            pattern: /^(?!0)\d{8,28}$/,
            message: message,
            trigger,
        };
    },
    // 只能输入汉字
    chinese(message = '只能输入汉字', type = baseType.string) {
        return {
            type: type,
            pattern: /^[\u4e00-\u9fa5]+$/,
            message: message,
            trigger,
        };
    },
    // 支持输入文字、数字和字母
    warehouseName(message = '只支持输入文字、自然数和字母') {
        return {
            // 支持输入文字、数字和字母 15位
            // pattern: /^[A-Za-z0-9\u4E00-\u9FA5]{1,15}$/,
            pattern: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
            message: message,
            trigger,
        };
    },
    // 支持中英文
    chinaEng(message = '只支持中英文输入') {
        return {
            pattern: /^[\u4E00-\u9FA5A-Za-z]+$/,
            message: message,
            trigger,
        };
    },
    // 只能输入整数
    number(message = '只能输入整数') {
        return { pattern: /^\d*$/, message: message, trigger };
    },
    // 只能输入整数
    nums(message = '只能输入0和正整数') {
        return { pattern: /^([1-9]\d*|[0]{1,1})$/, message: message, trigger };
    },
    // 只能输入整数大于0
    num(message = '只能输入大于0的整数') {
        return { pattern: /^[1-9]\d*$/, message: message, trigger };
    },
    // 请输入8位正确的发票号码
    num8(message = '请输入8位正确的发票号码') {
        return { pattern: /^\d{8}$/, message: message, trigger };
    },
    // 可以输入小数
    float(message = '只能输入大于0的数字，最多两位小数') {
        return {
            pattern: /(^[1-9](\d+)?(\.\d{0,2})?$)|(^\d\.\d{1,2}$)/,
            message: message,
            trigger,
        };
    },
    // 可以输入小数
    floatDotThree(message = '只能输入大于0的数字，最多三位小数') {
        return {
            pattern: /(^[1-9](\d+)?(\.\d{0,3})?$)|(^\d\.\d{1,2}$)/,
            message: message,
            trigger,
        };
    },

    // 可以输入小数 面积用
    floatArea(message = '只能输入大于等于0数字，最多两位小数') {
        return {
            pattern: /(^[0-9](\d+)?(\.\d{0,2})?$)|(^\d\.\d{1,2}$)/,
            message: message,
            trigger,
        };
    },
    // 输入正确的手机号码
    phone(message = '输入正确的手机号码') {
        var regEn = /^((00){1}[1-9]{1}[0-9]{1,3}|86|\+86)?1[34578]\d{9}$/;
        var regCn = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/;
        return { pattern: /^1\d{10}$/, message: message, trigger };
    },
    // 允许手机号码和座机
    allPhone(message = '请输入正确的手机或座机号码') {
        return { pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$|^0\d{2,3}-?\d{4,8}$/, message: message, trigger };
    },
    // 必须包含字母和数字
    letterAndNumber(message = '必须包含字母和数字') {
        return { pattern: /^(?![^a-zA-Z]+$)(?!\D+$)/, message: message, trigger };
    },
    pwd(message = '密码只能[字母+数字,字母+特殊字符，数字+特殊字符]') {
        return {
            pattern: /^(?=.*[0-9])|((?=[\x21-\x7e]+)[^A-Za-z0-9])|^(?=.*[0-9])((?=[\x21-\x7e]+)[^A-Za-z0-9])$/gi /* 数字及符号 */,
            message: message,
            trigger,
        };
    },
    password(message = '密码只能6~20位包含大写字母、小写字母、数字、标点符号(除空格)至少两种') {
        return {
            pattern: /(?!.*[\u4E00-\u9FA5\s])(?!^[a-z]+$)(?!^[A-Z]+$)(?!^[\d]+$)(?!^[^a-zA-Z\d]+$)^.{6,20}$/g,
            message: message,
            trigger,
        };
    },
    // 长度范围
    range(min: number, max: number, type = baseType.string, message: string) {
        return {
            type: type,
            min: min,
            max: max,
            message: message ? message : `长度在 ${min} 到 ${max}`,
            trigger,
        };
    },
    //经纬度
    longitudeLatitude(message = '只能输入大于0的数字，最多两位小数') {
        return {
            pattern: /(^[1-9](\d+)?(\.\d{0,6})?$)|(^\d\.\d{1,2}$)/,
            message: message,
            trigger,
        };
    },
    /** 字符串不能包含空格 */
    includeSpace(message = '不能包含空格') {
        return {
            pattern: /^\S+$/,
            message: message,
            trigger,
        };
    },
    beforeAfterIncludeSpace(message = '首尾不能包含空格') {
        return {
            pattern: /^\S.*\S$|(^\S{0,1}\S$)/,
            message: message,
            trigger,
        };
    },
};
