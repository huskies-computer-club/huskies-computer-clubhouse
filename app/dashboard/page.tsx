// create a form to add items to the database
'use client'
import { FormEvent, useState } from "react";
import { useAuth, useOrganizationList } from "@clerk/nextjs";


export default function DashboardPage() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image_url, setImageUrl] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

            const res = await fetch("/api/items", {
                method: "POST",
                body: JSON.stringify({ name, price, description, image_url }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                console.log("Item added");
            } else {
                console.log("Error adding item");
            }

        } catch (error) {
            console.error("Error adding item", error);
        }
    };
    const { isLoaded, setActive, userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        if (userMemberships.count > 0 && userMemberships.data[0].role == "org:admin") {
            // setActive(userMemberships.data[0].role == "org:admin");
            return (
                // todo: get this Protect component to work
                // <Protect role="org:admin" fallback={<p>You are not allowed to see this section.</p>}>
                <div>
                    <h1>Add Item</h1>
                    <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input
                                id="description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="image_url">Image URL</label>
                            <input
                                id="image_url"
                                type="text"
                                value={image_url}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>
                        <button type="submit">Add Item</button>
                    </form>
                </div>
                // </Protect>
            );
        } else {
            return <div>You are not allowed to see this</div>;

        }
    }

}
