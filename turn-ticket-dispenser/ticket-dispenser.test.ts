import { expect } from 'chai'
import 'mocha'
import TicketDispenser from './ticket-dispenser'

describe('Turn Ticket Dispenser', () => {
	describe('TurnTicketDispenser', () => {
		it('fix_me', () => {
			const dispenser = new TicketDispenser()
			const ticket = dispenser.getTurnTicket()
			expect(ticket.getTurnNumber()).to.eql(-1)
		})
	})
})
