export interface InfraMetrica {
    servidor: string;
    cpu: number; // %
    ram: number; // %
    fs: number; // %
    estadoServicios: 'OK' | 'Degradado' | 'Caído';
    tieneMetricas: boolean;
    latenciaRed: number; // ms
    zona: 'TULTITLÁN' | 'QUERÉTARO';
  }
  
  export const INFRA_SMC_TLT: InfraMetrica[] = [
    {
      servidor: 'TLT-Server01',
      cpu: 65,
      ram: 70,
      fs: 80,
      estadoServicios: 'OK',
      tieneMetricas: true,
      latenciaRed: 24,
      zona: 'TULTITLÁN'
    },
    {
      servidor: 'TLT-Server02',
      cpu: 92,
      ram: 85,
      fs: 95,
      estadoServicios: 'Degradado',
      tieneMetricas: false,
      latenciaRed: 42,
      zona: 'TULTITLÁN'
    },
    {
      servidor: 'TLT-Server03',
      cpu: 48,
      ram: 58,
      fs: 60,
      estadoServicios: 'OK',
      tieneMetricas: true,
      latenciaRed: 19,
      zona: 'TULTITLÁN'
    },
    {
      servidor: 'TLT-Server04',
      cpu: 88,
      ram: 92,
      fs: 88,
      estadoServicios: 'Caído',
      tieneMetricas: false,
      latenciaRed: 77,
      zona: 'TULTITLÁN'
    }
  ];
  
  export const INFRA_SMC_QRO: InfraMetrica[] = [
    {
      servidor: 'QRO-Server01',
      cpu: 50,
      ram: 60,
      fs: 40,
      estadoServicios: 'OK',
      tieneMetricas: true,
      latenciaRed: 18,
      zona: 'QUERÉTARO'
    },
    {
      servidor: 'QRO-Server02',
      cpu: 73,
      ram: 90,
      fs: 85,
      estadoServicios: 'Caído',
      tieneMetricas: false,
      latenciaRed: 65,
      zona: 'QUERÉTARO'
    },
    {
      servidor: 'QRO-Server03',
      cpu: 91,
      ram: 88,
      fs: 93,
      estadoServicios: 'Degradado',
      tieneMetricas: false,
      latenciaRed: 85,
      zona: 'QUERÉTARO'
    },
    {
      servidor: 'QRO-Server04',
      cpu: 30,
      ram: 45,
      fs: 50,
      estadoServicios: 'OK',
      tieneMetricas: true,
      latenciaRed: 27,
      zona: 'QUERÉTARO'
    }
  ];
  