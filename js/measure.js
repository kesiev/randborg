function Measure(value,unit) {
    return {
        solve:(style)=>{
            if (typeof style == "string") {
                style = style.replace(/([0-9.]+)msr/g,(m,m1)=>{
                    return (parseFloat(m1)*value)+unit;
                })
            }
            return style;
        }
    }
}