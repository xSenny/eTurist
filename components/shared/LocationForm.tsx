'use client';
import { z } from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button"
import {FileUploader} from "@/components/shared/FileUploader";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Schema} from "mongoose";
import {useState} from "react";
import Image from "next/image"
import Dropdown from "@/components/shared/Dropdown";
import {auth} from "@clerk/nextjs";

const formSchema = z.object({
    username: z.string().min(2).max(50),
})
const LocationForm = ({type, userId}: {type: "Add" | "Update"; userId: string | null }) => {

    const [files, setFiles] = useState<File[]>([]);


    const defaultValues = type === "Add" ? {
        name: '',
        address: '',
        city: '',
        zip: '',
        country: '',
        phone: '',
        email: '',
        website: '',
        imageUrl: '',
        description: '',
        category: ''
    } : {

    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues,
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div className={"flex justify-center items-center h-full w-full mt-10"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full md:px-16 xl:px-48 px-8">
                    <div className={"md:flex w-full justify-between  space-y-8 md:space-y-0 md:gap-8"}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input className={""} placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Category</FormLabel>
                                    <FormControl>
                                        <Dropdown value={field.value} categories={[
                                            {
                                                name: "Salut",
                                            }
                                        ]} userID={userId} onChange={field.onChange}/>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={"md:flex w-full justify-between space-y-8 md:space-y-0 md:gap-8"}>
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input className={""} placeholder="Address" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className={"w-full"}>
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="City" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="zip"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zip</FormLabel>
                                <FormControl>
                                    <Input placeholder="Zip" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Zip</FormLabel>
                                <FormControl>
                                    <Input placeholder="Zip" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input placeholder="Country" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input placeholder="Phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                    <Input placeholder="Website" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem className={"w-full"}>
                                <FormControl className={"h-72"}>
                                    <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles}/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )

}

export default LocationForm;