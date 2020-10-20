export const addAndFormatCausa = (values:any) => {
    const jsDay = new Date()
    return {
        ...values,
        inicioDemanda: jsDay.getDate() + "-" + jsDay.getMonth() + "-" + jsDay.getFullYear()
    }
}