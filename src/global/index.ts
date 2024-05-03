import type { App } from "vue"
import reelementpusl from "./reelementpusl"
import reelementpushicon from "./reelementpushicon"
export const globalComponents = (app: App) => {
    app.use(reelementpusl)
    app.use(reelementpushicon)

}