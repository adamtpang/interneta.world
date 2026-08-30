import { generatePageMetadata } from '@/lib/utils/metadata';
import ContactClient from './contact-client';

export const metadata = generatePageMetadata(
  "Contact",
  "Contact Interneta through its public community and source-code channels."
);

export default function ContactPage() {
  return <ContactClient />;
}
