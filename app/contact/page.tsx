"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div>

            <div className="relative py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center justify-center space-y-4 text-center"
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <h1 className="text-3xl md:text-5xl font-bold  mb-4">Contact Us</h1>
                            <p className=" text-lg md:text-xl max-w-3xl">
                                Have questions about NearKart? Get in touch with our team.
                            </p>
                        </div>
                    </motion.div>
                </div>
                {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div> */}
            </div>
            <div className="container px-4 py-12 md:px-6 md:py-24">
                {/* <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions about ICCSAI 2025? Get in touch with our team.
          </p>
        </div>
      </div> */}

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-16">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground">
                                For any inquiries regarding the conference, please don't hesitate to contact us. Our team is here to
                                assist you with any questions you may have.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <Mail className="h-6 w-6 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-bold">Email</h3>
                                    <p className="text-muted-foreground">
                                        General Inquiries:{" "}
                                        <a href="mailto:debashis.das@dsec.ac.in" className="text-primary hover:underline">
                                            contact@nearkart.com
                                        </a>
                                    </p>
                                    
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="h-6 w-6 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-bold">Phone</h3>
                                    <p className="text-muted-foreground">
                                        Conference Secretariat:{" "}
                                        <a href="tel:+11234567890" className="text-primary hover:underline">
                                            +91 1234567890
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-bold">Location</h3>
                                    <p className="text-muted-foreground">
                                        Conference Venue:
                                        <br />
                                        Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex
                                        <br />
                                        540 Dum Dum Road, Surermath, (Near Dum Dum Jn. Station)

                                        <br />
                                        Kolkata-700074 West Bengal
                                        <br />
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    <span className="sr-only">Facebook</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                    <span className="sr-only">Instagram</span>
                                </a>
                                <a
                                    href="#"
                                    className="rounded-full bg-muted p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-6 w-6"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map*/}
                    <div className="space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">
                                Conference Venue
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                540 Dum Dum Road, Surermath, (Near Dum Dum Jn. Station)
                                Kolkata-700074 West Bengal, India
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="first-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        First Name
                                    </label>
                                    <Input id="first-name" placeholder="John" required />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="last-name"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Last Name
                                    </label>
                                    <Input id="last-name" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john.doe@example.com" required />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Subject
                                </label>
                                <Input id="subject" placeholder="How can we help you?" required />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Message
                                </label>
                                <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" required />
                            </div>

                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>



                    </div>

                </div>
                <div className="rounded-lg overflow-hidden h-[300px] mt-8 w-full">
                    {/* Map */}
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3682.942995052196!2d88.4047502!3d22.6186038!3m2!1i1024!2i768!4f13.1!2m1!1ssurtech!5e0!3m2!1sen!2sin!4v1740766736892!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
