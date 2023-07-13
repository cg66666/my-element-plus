/**
 * 默认属性名、外层数组结构就是存储的数据格式path
 * name: element 组件名 （渲染所需的组件名）
 * key: 每个组件独一无二的key （为了获取组件所在data里的路径）
 * label：每个组件的标题名
 * config：组件传入props （传入组件的prop，label等需要在此传入）
 * rules：校验规则
 */

// 组件test1
export const testA = {
  name: 'a_Form',
  title: 'a表单页面',
  components: {
    // 存储path
    test1: {
      // 组件名
      name: 'el-input',
      key: 1,
      label: '测试01',
      // 组件传入props
      config: {
        aaa: '333',
        autocomplete: 'off',
      },
      rules: [
        {
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
      defaultValue: 111,
    },
    test2: [
      {
        name: 'el-input',
        key: 2,
        label: '测试02',
        config: {
          bbb: '444',
          autocomplete: 'off',
        },
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        defaultValue: '呵呵',
      },
      {
        name: 'el-input',
        key: 4,
        label: '测试而更为04',
        config: {
          bbb: '444',
          autocomplete: 'off',
        },
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        defaultValue: '嗯嗯',
      },
    ],
    test3: {
      test4: {
        name: 'el-input',
        label: '测试03',
        key: 3,
        config: {
          aaa: '333',
          autocomplete: 'off',
        },
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        defaultValue: 111,
      },
      test5: {
        name: 'el-input',
        label: '测试05',
        key: 5,
        config: {
          aaa: '333',
          type: 'password',
          autocomplete: 'off',
        },
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        defaultValue: '222',
      },
      test6: [
        {
          name: 'el-input',
          label: '测试06',
          key: 6,
          config: {
            aaa: '333',
            autocomplete: 'off',
          },
          rules: [
            {
              required: true,
              message: 'Please select Activity zone',
              trigger: 'change',
            },
          ],
          defaultValue: '777',
        },
      ],
    },
    test7: [
      {
        name: 'DatePicker',
        label: '测试08',
        key: 8,
        config: {
          aaa: '333',
          autocomplete: 'off',
        },
        rules: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
          },
        ],
        defaultValue: '',
      },
    ],
    test8: {
      name: 'UploadList',
      label: '测试08',
      key: 8,
      config: {
        aaa: '333',
        autocomplete: 'off',
      },
      rules: [
        {
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change',
        },
      ],
      defaultValue: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    },
  },
};
