import type { App } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// 您不能这样写的原因是因为在导出对象时，
// 对象字面量内部不能包含带有赋值操作符的语句。
// 在JavaScript中
// ，对象字面量应该是简单的键值对的集合，而不是包含函数定义或其他复杂逻辑的代码块。
// 因此，需要将函数定义和导出操作分开，确保代码结构的合法性和可读性。
// export default {
//        const getset=(app:App)=>{

//        }
// }

export default {
      install: (app: App) => {
            app.use(ElementPlus)
      }
}