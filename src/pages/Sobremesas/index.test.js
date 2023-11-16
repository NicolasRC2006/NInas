import { render, screen } from '@testing-library/react';
import React from "react";
import Sobremesas from '.';
// testamos seo titulo de sobremesas e bebidas estava la
test("verificando titulo", () => {
    render(<Sobremesas/>)
    const titulo = screen.getByText('Sobremesas e Bebidas')
    expect(titulo).toBeInTheDocument()
});