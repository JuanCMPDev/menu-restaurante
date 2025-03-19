import Header from "@/components/header";
import MenuContainer from "@/components/menu-container";
import { menuData } from "@/data/menu-data";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header restaurantName="Ensaladas Arauca" logoUrl="/default-logo.jpg" />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-12 text-center relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-1 bg-primary rounded-full"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mt-6 mb-4 leading-tight tracking-tight">
            Nuestro Menú
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
            Deliciosas opciones para todos los gustos, preparadas con ingredientes frescos y de alta calidad.
          </p>
        </div>
        <MenuContainer menuData={menuData} />
      </main>

      <Footer
        contactInfo={{
          address: "Calle 16 # 20-69, Arauca-Arauca",
          phone: "+57 316 835 22 22",
          schedule: "Lun-Vie: 10:00-18:00, Sáb: 10:00-14:00"
        }}
      />
      
      <WhatsAppButton 
        phoneNumber="+573175176081" 
        message="Hola, me gustaría hacer un pedido de Ensaladas Arauca." 
      />
    </div>
  );
}
