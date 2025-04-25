export interface RendimientoComponente {
    componente: string;
    color: string;
    zona: 'TULTITLÁN' | 'QUERÉTARO';
    historial: number[];
  }
  
  export const RENDIMIENTO_SMC_TLT: RendimientoComponente[] = [
    {
      componente: 'SMC-Core',
      color: '#42a5f5',
      zona: 'TULTITLÁN',
      historial: [820, 830, 810, 800, 790, 780, 770]
    },
    {
      componente: 'Tomcat-WAS',
      color: '#ab47bc',
      zona: 'TULTITLÁN',
      historial: [760, 740, 750, 780, 760, 740, 730]
    }
  ];
  
  export const RENDIMIENTO_SMC_QRO: RendimientoComponente[] = [
    {
      componente: 'SMC-Core',
      color: '#66bb6a',
      zona: 'QUERÉTARO',
      historial: [600, 610, 615, 620, 630, 620, 610]
    },
    {
      componente: 'Tomcat-WAS',
      color: '#ffa726',
      zona: 'QUERÉTARO',
      historial: [580, 560, 570, 590, 600, 580, 570]
    }
  ];
  