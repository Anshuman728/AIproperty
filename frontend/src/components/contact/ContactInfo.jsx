import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactInfoItem from "./InfoItem";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9772778822",
    link: "tel:+919772778822",
  },
  {
    icon: Mail,
    title: "Email",
    content: "support@urbansquare.com",
    link: "mailto:support@urbansquare.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Floor 2/4/5, Block 1, Sector 1, Ranchi, Jharkhand, India",
    link: "#map",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon-Fri: 9 AM - 6 PM",
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-8">Our Office</h2>
      <div className="space-y-6">
        {contactInfo.map((info, index) => (
          <ContactInfoItem key={index} {...info} />
        ))}
      </div>
    </motion.div>
  );
}
