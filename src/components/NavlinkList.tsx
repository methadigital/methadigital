import { NavLink } from './Navlink';

export function NavLinkList() {
  return (
    <>
      <NavLink path="/" label="Início" />
      <NavLink path="/about" label="Sobre" />
      <NavLink path="/services" label="Serviços" />
      <NavLink path="/help" label="Ajuda" />
      <NavLink path="/contact" label="Contato" />
    </>
  );
}
