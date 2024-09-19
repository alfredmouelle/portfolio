"use client";

import { contactAction } from "@/actions/contact.action";
import { ContactRequest, contactSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Icons } from "./icons";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const form = useForm<ContactRequest>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { mutate: contactMe, isPending } = useMutation({
    mutationKey: ["contact"],
    mutationFn: async (data: ContactRequest) => {
      const res = await contactAction(data);
      if (!res || res?.data?.error) throw new Error(res?.data?.error);
      toast.success("Votre message a bien été envoyé.");
      form.reset();
    },
    onError: (e) => {
      toast.error(e.message || "Une erreur est survenue, veuillez réessayer.");
    },
  });

  return (
    <Form {...form}>
      <form
        id="contact-form"
        className="mt-10 flex flex-col gap-y-4"
        onSubmit={form.handleSubmit((data) => contactMe(data))}
      >
        <div className="grid items-center gap-x-4 md:grid-cols-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom & Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Alfred Mouelle" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="alfredmouelle@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" rows={7} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          isLoading={isPending}
          className="self-stretch md:self-end"
        >
          Envoyer
          {isPending ? null : <Icons.send className="ml-2 h-4 w-4" />}
        </Button>
      </form>
    </Form>
  );
}
