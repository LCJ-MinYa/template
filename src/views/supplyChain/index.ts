/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-28 10:37:05
 * @LastEditors: LiChaoJun
 * @Description: 模板string
 */
import { replaceEmptyLine } from '@/utils/util';
import { CODE_NEW_LINE_REPLACE_LOGO } from '@/utils/dictionary';
interface BasicForm {
    ref?: string;
    search?: boolean;
    alignCenter?: boolean;
    formatterValue?: boolean;
    showSerialNumber?: boolean;
    requestApi?: string;
}

interface ColumnsForm extends anyObjectType {
    label: string;
    prop: string;
    width: number | '';
    align?: string | undefined;
    showOverflowTooltip?: boolean;
    searchOrder?: number | '';
    searchType?: string | undefined;
}

const baseElementTableString = (basicForm: BasicForm, columns: Array<ColumnsForm>): string => {
    const { ref, search, formatterValue, alignCenter, showSerialNumber, requestApi } = basicForm;
    const str = `\
<template>
    <base-element-table
        ${ref ? `ref="${ref}"` : ''}
        ${search ? 'search' : ''}
        ${alignCenter ? 'alignCenter' : ''}
        ${formatterValue ? 'formatterValue' : ''}
        ${showSerialNumber ? 'showSerialNumber' : ''}
        :columns="columns"
        :data="dataSource"
        requestApi="${requestApi}"
    >
${CODE_NEW_LINE_REPLACE_LOGO}
    </base-element-table>
</template>
${CODE_NEW_LINE_REPLACE_LOGO}
<script>
import { BaseElementTable } from '@/components';
export default {
    name: 'baseElementTable',
    components: {
        BaseElementTable,
    },
    data() {
        return {
            columns: [
                ${columns.map((item) => {
                    return `
                {
                    label: '${item.label}',
                    prop: '${item.prop}',
                    width: ${item.width},
                    ${item.align ? `align: '${item.align}'` : ''}
                    ${!item.showOverflowTooltip ? 'showOverflowTooltip: false' : ''}
                    ${item.searchOrder ? `searchOrder: ${item.searchOrder}` : ''}
                    ${item.searchType ? `searchType: '${item.searchType}'` : ''}
                }`;
                })}
            ],
            dataSource: [],
        }
    },
}
</script>
${CODE_NEW_LINE_REPLACE_LOGO}
<style lang="less" scoped>
</style>
`;
    return replaceEmptyLine(str);
};

export { baseElementTableString, BasicForm, ColumnsForm };
