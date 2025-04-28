export interface RedComponente {
    componente: string;
    historial: number[]; // porcentaje de conectividad en el tiempo
    color: string; // color para la gráfica
  }
  
  export interface ServidorSMC {
    ip: string;
    nombre: string;
    puertos: string;      // Estado de puertos (ejemplo: "443 OK, 8080 OK")
    vpn: string;          // Estado VPN (ejemplo: "Activa" o "Inactiva")
    dmz: string;          // Estado DMZ (ejemplo: "Operativa" o "No disponible")
    urlsInternas: string; // Disponibilidad de URLs internas (ejemplo: "100%")
    urlsExternas: string; // Disponibilidad de URLs externas (ejemplo: "98%")
  }
  
  
  // Datos de Tultitlán
  export const RED_SMC_TLT: RedComponente[] = [
    { componente: 'VPN Tultitlán', historial: [100, 100, 99, 100, 98, 100, 100], color: '#4CAF50' },
    { componente: 'Puertos Tultitlán', historial: [100, 100, 100, 100, 100, 100, 100], color: '#2196F3' },
    { componente: 'URLs Internas Tultitlán', historial: [100, 100, 98, 99, 100, 99, 100], color: '#FFC107' },
    { componente: 'URLs Externas Tultitlán', historial: [100, 99, 97, 98, 100, 100, 99], color: '#FF5722' }
  ];
  
  export const SERVIDORES_TLT: ServidorSMC[] = [
    { ip: '10.206.234.175', nombre: '1-ITSM-SMC-MIDDLEWARE-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '100%' },
    { ip: '10.206.234.177', nombre: '1-ITSM-SMC-TICKET-API-SA-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '98%' },
    { ip: '10.206.234.173', nombre: '1-ITSM-SMC-DB-SA-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '97%' },
    { ip: '10.206.234.171', nombre: '1-ITSM-SMC-DB-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '96%' },
    { ip: '10.206.234.172', nombre: '1-ITSM-SMC-APP-SA-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '99%' },
    { ip: '10.206.234.170', nombre: '1-ITSM-SMC-APP-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '98%' },
    { ip: '10.206.234.174', nombre: '1-ITSM-SMC-GRAFANAS-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '97%' },
    { ip: '10.206.234.176', nombre: '1-ITSM-SMC-NGINX-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '99%' },
    { ip: '10.206.234.178', nombre: '1-ITSM-SMCV1-MARIA-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '97%' },
    { ip: '10.206.234.180', nombre: '1-ITSM-TABLEROSNOC-POSTGRESQL-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '96%' },
    { ip: '10.206.234.181', nombre: '1-ITSM-CRONICLE-HA', puertos: '8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '95%' },
    { ip: '10.206.234.164', nombre: '1-ITSM-ETLS-DB-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '96%' },
    { ip: '10.206.234.168', nombre: '1-ITSM-MODULO-TICKETS-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '100%' },
    { ip: '10.206.234.184', nombre: '1-ITSM-SMC-REPORTES-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '97%' },
    { ip: '10.206.234.179', nombre: '1-ITSM-TICKET-API-HA', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '98%' },
    { ip: '10.206.234.169', nombre: '1-ITSM-PROCESOS-ETL-VERTICA-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '97%' },
    { ip: '10.206.234.167', nombre: '1-ITSM-GRAFANA-ETL-CLUSTER02-HA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '96%' }
  ];
  
  // Datos de Querétaro
  export const RED_SMC_QRO: RedComponente[] = [
    { componente: 'VPN Querétaro', historial: [100, 99, 100, 100, 100, 100, 99], color: '#4CAF50' },
    { componente: 'Puertos Querétaro', historial: [100, 100, 100, 99, 100, 100, 100], color: '#2196F3' },
    { componente: 'URLs Internas Querétaro', historial: [100, 100, 98, 99, 100, 99, 98], color: '#FFC107' },
    { componente: 'URLs Externas Querétaro', historial: [99, 99, 98, 97, 100, 98, 99], color: '#FF5722' }
  ];
  
  export const SERVIDORES_QRO: ServidorSMC[] = [
    { ip: '10.180.199.28', nombre: '1-ITSM-SMC-MIDDLEWARE', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '99%' },
    { ip: '10.180.199.183', nombre: '1-ITSM-SMC-TICKET-API-SERVICIOS', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '97%' },
    { ip: '10.180.199.152', nombre: '1-ITSM-SMC-DB-SA_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '95%' },
    { ip: '10.180.251.111', nombre: '1-ITSM-SMC-DB_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '95%' },
    { ip: '10.180.199.141', nombre: '1-ITSM-SMC-APP-SA_restored', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '96%' },
    { ip: '10.180.199.29', nombre: '1-ITSM-SMC-APP_restored', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '96%' },
    { ip: '10.180.199.128', nombre: '1-ITSM-SMC-GRAFANAS_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '95%' },
    { ip: '10.180.199.126', nombre: '1-ITSM-SMC-NGINX', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '98%' },
    { ip: '10.180.199.56', nombre: '1-ITSM-SMCV1-MARIA', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '94%' },
    { ip: '10.71.35.63', nombre: '1-ITSM-SMC-PostgreSQL', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '98%', urlsExternas: '95%' },
    { ip: '10.71.23.59', nombre: '1-ITSM-CRONICLE', puertos: '8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '94%' },
    { ip: '10.180.199.5', nombre: '1-ITSM-SMC-ETLS', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '95%' },
    { ip: '10.180.199.3', nombre: '1-ITSM-MODULO-TICKETS', puertos: '443 OK, 8080 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '100%', urlsExternas: '98%' },
    { ip: '10.180.251.16', nombre: '1-ITSM-TICKET-API_okta_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '99%', urlsExternas: '97%' },
    { ip: '10.180.199.88', nombre: '1-ITSM-PROCESOS-ETL-VERTICA_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '97%', urlsExternas: '94%' },
    { ip: '10.180.199.153', nombre: '1-ITSM-GRAFANA-ETL-CLUSTER02_restored', puertos: '443 OK', vpn: 'Activa', dmz: 'Operativa', urlsInternas: '96%', urlsExternas: '94%' }
  ];
  
  