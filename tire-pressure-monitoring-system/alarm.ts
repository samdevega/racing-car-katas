import Sensor from './sensor'

export default class Alarm {
	private alarmOn: boolean

	constructor(
		private sensor: Sensor,
		private lowPressureThreshold: number = 17,
		private highPressureThreshold: number = 21
	) {
		this.alarmOn = false
	}

	public check() {
		const psiPressureValue = this.sensor.popNextPressurePsiValue()

		if (psiPressureValue < this.lowPressureThreshold || this.highPressureThreshold < psiPressureValue) {
			this.alarmOn = true
		}
	}

	public isAlarmOn() {
		return this.alarmOn
	}
}
