import { createMuiTheme } from '@material-ui/core/styles'
import { primaria, secundaria} from './colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: primaria,
            contrastText: "white"

        },
        secondary:{
            main: secundaria,
            contrastText: "white"

        },
        text: {
        primary: secundaria
    }
}})

export default theme;
