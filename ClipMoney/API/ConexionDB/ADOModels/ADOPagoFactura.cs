﻿using ConexionDB.DataAccess;
using ConexionDB.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConexionDB.ADOModels
{
    public class ADOPagoFactura : ICRUD<PagoFactura>
    {
        public bool Eliminar(string filtro)
        {
            throw new NotImplementedException();
        }

        public bool GuardarElemento(PagoFactura elemento)
        {
            throw new NotImplementedException();
        }

        public bool ModificarElemento(PagoFactura elemento)
        {
            throw new NotImplementedException();
        }

        public List<PagoFactura> ObtenerLista(string filtro)
        {
            throw new NotImplementedException();
        }
    }
}
