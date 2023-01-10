
export default class time
{
    constructor(value, timeChangeValue)
    {
        this.value                  = value;           //valor temporizador
        this.timeChangerCounter     = 0;               //temporizador para cambiar valor (seconds)
        this.timeChangeValue        = timeChangeValue; //tiempo para cmbiar valor (seconds)
    }
}