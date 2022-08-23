import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';

const DropdownProperties = ({ link }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="uppercase"> {link}</Menu.Button>
      <Menu.Items className="absolute right-0 w-56 origin-top-right rounded pt-2  bg-myBlack shadow-lg">
        <Menu.Item>
          <DropdownLink className="dropdown-link" href="/profile">
            Listado
          </DropdownLink>
        </Menu.Item>
        <Menu.Item>
          <DropdownLink className="dropdown-link" href="/order-history">
            Alquileres de Lujos
          </DropdownLink>
        </Menu.Item>
        <Menu.Item>
          <DropdownLink className="dropdown-link" href="/admin/dashboard">
            Proyectos
          </DropdownLink>
        </Menu.Item>
        <Menu.Item>
          <DropdownLink className="dropdown-link" href="/admin/dashboard">
            Comercios
          </DropdownLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default DropdownProperties;
