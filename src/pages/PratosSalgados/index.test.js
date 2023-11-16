import { render, screen } from '@testing-library/react';
import React from "react";
import PratosSalgados from '.';

// Testamos se o titulo cardapio estava la
test("verificando ", () => {
    render(<PratosSalgados/>)
    const titulo = screen.getByText('Cardápio')
    expect(titulo).toBeInTheDocument()
});