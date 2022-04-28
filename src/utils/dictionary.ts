/*
 * @Author: LiChaoJun
 * @Date: 2022-04-27 14:59:11
 * @LastEditTime: 2022-04-28 10:15:27
 * @LastEditors: LiChaoJun
 * @Description: 字典枚举
 */

const CODE_NEW_LINE_REPLACE_LOGO = '##br##';

const TABLE_COLUMNS_ENUM = {
    ALIGN: [
        {
            label: '左对齐',
            value: 'left',
        },
        {
            label: '居中对齐',
            value: 'center',
        },
        {
            label: '右对齐',
            value: 'right',
        },
    ],
    SEARCH_TYPE: [
        {
            label: '输入框',
            value: 'input',
        },
        {
            label: '下拉选择器',
            value: 'select',
        },
        {
            label: '日期选择器',
            value: 'datePicker',
        },
        {
            label: '月份选择器',
            value: 'monthPicker',
        },
        {
            label: '年份选择器',
            value: 'yearPicker',
        },
        {
            label: '省市区选择器',
            value: 'areaSelect',
        },
    ],
};

export { CODE_NEW_LINE_REPLACE_LOGO, TABLE_COLUMNS_ENUM };
