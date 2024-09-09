import { expect } from 'chai'
import 'mocha'
import Alarm from './alarm'
import Sensor from './sensor'

describe('Tyre Pressure Monitoring System', () => {
	describe('Alarm', () => {
		it('is off before checking pressure', () => {
			const alarm = new Alarm(new Sensor())

			expect(alarm.isAlarmOn()).eql(false)
		})

		it('is off after checking pressure when pressure is equal to low pressure threshold', () => {
			const sensorStub = new Sensor()
			sensorStub.popNextPressurePsiValue = () => 17
			const alarm = new Alarm(sensorStub, 17, 21)

			alarm.check()

			expect(alarm.isAlarmOn()).eql(false)
		})

		it('is off after checking pressure when pressure is equal to high pressure threshold', () => {
			const sensorStub = new Sensor()
			sensorStub.popNextPressurePsiValue = () => 21
			const alarm = new Alarm(sensorStub, 17, 21)

			alarm.check()

			expect(alarm.isAlarmOn()).eql(false)
		})

		it('is off after checking pressure when pressure is between low and high pressure threshold', () => {
			const sensorStub = new Sensor()
			sensorStub.popNextPressurePsiValue = () => 19
			const alarm = new Alarm(sensorStub, 17, 21)

			alarm.check()

			expect(alarm.isAlarmOn()).eql(false)
		})

		it('is on after checking pressure when pressure is below low pressure threshold', () => {
			const sensorStub = new Sensor()
			sensorStub.popNextPressurePsiValue = () => 16
			const alarm = new Alarm(sensorStub, 17, 21)

			alarm.check()

			expect(alarm.isAlarmOn()).eql(true)
		})
	})
})
