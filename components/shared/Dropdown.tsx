'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {ICategory} from "@/lib/database/schemas/category.schema";
import {Input} from "@/components/ui/input";
import {startTransition, useState} from "react";
import {createCategory} from "@/lib/actions/category.actions";



const Dropdown = ({value, onChange, categories, userID}: {value: string, onChange: () => void; categories: ICategory[]; userID: string}) => {
    const [newCategory, setNewCategory] = useState('');
    const handleCreateCategory =  () => {
        console.log(userID, 'userID')
        setNewCategory('');
        createCategory({name: newCategory, clerkID: userID})
            .then(category => {
                categories.push(category);
            });
    }

    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name}>
                        {category.name}
                    </SelectItem>
                ))}
                <AlertDialog>
                    <AlertDialogTrigger className={"px-8 text-sm py-2 hover:bg-gray-100/10 w-full rounded-8 justify-start cursor-default"}>Create a new Category</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>New Category</AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input placeholder={"Category Name"} value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={(e) => startTransition(handleCreateCategory)}>Create</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SelectContent>
        </Select>

    )
}

export default Dropdown;