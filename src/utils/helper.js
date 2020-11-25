export const dateFtm = fecha => {
       let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        let date = new Date(fecha)
        let normalizeDate = new Intl.DateTimeFormat("es-ES", options).format(date)
        return normalizeDate

    }