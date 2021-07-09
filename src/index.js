import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from "date-fns/locale/ru";
import format from "date-fns/format";

class RuLocalizedUtils extends DateFnsUtils {
    getCalendarHeaderText(date) {
        return format(date, "LLLL", { locale: this.locale });
    }

    getDatePickerHeaderText(date) {
        return format(date, "dd MMMM", { locale: this.locale });
    }
}

ReactDOM.render(
    <React.StrictMode>
        <MuiPickersUtilsProvider utils={RuLocalizedUtils} locale={ruLocale}>
            <App/>
        </MuiPickersUtilsProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
