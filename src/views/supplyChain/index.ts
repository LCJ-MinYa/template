/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-27 15:50:51
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
}

interface ColumnsForm extends anyObjectType {
    label: string;
    prop: string;
    width: string;
}

const baseElementTableString = (basicForm: BasicForm, columns: Array<ColumnsForm>): string => {
    const { ref, search, formatterValue, alignCenter, showSerialNumber } = basicForm;
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
    >
${CODE_NEW_LINE_REPLACE_LOGO}
    </base-element-table>
</template>
${CODE_NEW_LINE_REPLACE_LOGO}
<script>
import { BaseElementTable } from '@/components';
export default {
    name: 'InventoryAllocation',
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
                    width: '${item.width}',
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
