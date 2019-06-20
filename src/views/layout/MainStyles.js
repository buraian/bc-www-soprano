import { css } from 'emotion'
import positionMainWindow from 'Config/mixins/positionMainWindow'


class MainStyles {
    Main () {
        return css`
            ${positionMainWindow({ borderRadius: 0 })}
            overflow-y: auto;
        `
    }
}

export default new MainStyles()
