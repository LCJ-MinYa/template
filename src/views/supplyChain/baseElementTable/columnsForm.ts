/*
 * @Author: LiChaoJun
 * @Date: 2022-04-26 17:24:49
 * @LastEditTime: 2022-04-28 10:10:17
 * @LastEditors: LiChaoJun
 * @Description: Columns配置
 */
import { ref, reactive } from 'vue';
import { ColumnsForm } from '../index';
import { baseRules } from '@/utils/rule';
import { message } from 'ant-design-vue';
import { TABLE_COLUMNS_ENUM } from '@/utils/dictionary';

export default function columnsForm(): anyObjectType {
    const columnsRef = ref();

    const columnsFormState = reactive<ColumnsForm>({
        label: '',
        prop: '',
        width: '',
        align: undefined,
        showOverflowTooltip: true,
        searchOrder: '',
        searchType: undefined,
    });

    const columnsFormRules = reactive({
        label: [baseRules.required('表格标题')],
        prop: [baseRules.required('表格属性')],
        width: [baseRules.required('表格宽度'), baseRules.nums()],
    });

    const columns: Array<ColumnsForm> = reactive([]);

    const addColumns = (): void => {
        columnsRef.value
            .validate()
            .then((result: ColumnsForm) => {
                columns.push(result);
                columnsRef.value.resetFields();
                message.success('添加成功，请在下方代码区查看');
            })
            .catch(() => console.log('error'));
    };

    const resetColumns = (): void => {
        columnsRef.value.resetFields();
    };

    return {
        columnsRef,
        columnsFormState,
        columnsFormRules,
        columns,
        addColumns,
        resetColumns,
        TABLE_COLUMNS_ENUM,
    };
}
