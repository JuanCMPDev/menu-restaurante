interface ContactInfo {
    address: string
    phone: string
    schedule: string
  }
  
  interface FooterProps {
    contactInfo: ContactInfo
  }
  
  export default function Footer({ contactInfo }: FooterProps) {
    return (
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Dirección:</span>
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Teléfono:</span>
                  <span>{contactInfo.phone}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-semibold">Horario:</span>
                  <span>{contactInfo.schedule}</span>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 pt-6 border-t border-secondary-foreground/20 text-center text-sm">
            <p>©️ {new Date().getFullYear()} Ensaladas Arauca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }