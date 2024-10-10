import { Container, HeaderLabel } from '@market-pulse-app/components/StocksTable/TableHeader/TableHeader.style';

const TableHeader = () => (
    <Container>
        <HeaderLabel flex={2.5}>Símbolo</HeaderLabel>
        <HeaderLabel flex={6}>Nombre</HeaderLabel>
        <HeaderLabel flex={2.5}>Moneda</HeaderLabel>
        <HeaderLabel flex={2.5}>Tipo</HeaderLabel>
    </Container>
);

export default TableHeader;
