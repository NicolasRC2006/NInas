import { render, screen } from '@testing-library/react';
import React from "react";
import MovimentoSociais from '.';

// Testamos se o titulo "home" esta na pagina
test("verificando titulo", () => {
    render(<MovimentoSociais/>)
    const titulo = screen.getByText('Projetos apoiados pelo Ninas Gastrobar')
    expect(titulo).toBeInTheDocument()
});