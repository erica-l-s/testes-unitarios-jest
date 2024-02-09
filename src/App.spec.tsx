import {fireEvent, render} from '@testing-library/react'
import App from './App'


describe('App Component', ()=>{
    it('should render list items', ()=>{
        const {getByText} = render(<App />)

        
        expect(getByText('Erica')).toBeInTheDocument()
        expect(getByText('Ellen')).toBeInTheDocument()
        expect(getByText('Bruna')).toBeInTheDocument()
    })

    it('should be able to add new item to the list', () =>{

        const {getByText} = render(<App />)

        const addButton = getByText("Adicionar")

        fireEvent.click(addButton)

        expect(getByText('Novo')).toBeInTheDocument()
    })
})