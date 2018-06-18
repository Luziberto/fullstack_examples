const semanas = 4
const calc = () => {
    const semanas = 4
    const horasDia = 6
    const dias = 5
    const valorM = 17.80
    const valorS = 29.62

    const tM = ((horasDia*dias)*semanas)*valorM
    const tS = ((horasDia*dias)*semanas)*valorS
    const sesi = {
        Salario_Medio: tM,
        Salario_Superior: tS 
    }
    console.log(sesi)
}  
calc()