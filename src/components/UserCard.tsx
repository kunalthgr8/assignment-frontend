import { MapPin, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";

type Props = {
	user: {
		first_name: string;
		last_name: string;
		city: string;
		contact_number: string;
	};
};

const UserCard = ({ user }: Props) => {
	const { first_name, last_name, city, contact_number } = user;

	return (
		<div className="flex flex-col gap-y-3 rounded-md bg-white p-4 shadow-md w-80 h-max">
			<Avatar className="size-16">
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<h3 className="text-2xl font-bold">
				{first_name} {last_name}
			</h3>
			<p className="text-xs flex items-center gap-x-1 text-neutral-600">
				<MapPin className="inline-block size-4 text-neutral-600" />
				<span>{city}</span>
			</p>
			<Separator />
			<div className="flex justify-between items-center">
				<div>
					<p className="flex items-center gap-x-1">
						<Phone className="size-4 stroke-0" fill="currentColor" />
						<span className="text-sm font-medium">{contact_number}</span>
					</p>
					<span className="text-neutral-400 text-xs">
						{contact_number ? "Available on phone" : "Unavailable"}
					</span>
				</div>
				<Dialog>
					<DialogTrigger>
						<Button>Fetch Details</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle className="text-2xl text-neutral-800">
								Details
							</DialogTitle>
							<DialogDescription>
								Here are the deatils of following employee.
							</DialogDescription>
						</DialogHeader>
						<div className="text-sm text-black font-semibold">
							<p>
								Name: {first_name} {last_name}
							</p>
							<p>City: {city}</p>
							<p>Contact Number: {contact_number}</p>
							<p className="mt-3 mb-2">Profile Image:</p>
							<Avatar className="size-36">
								<AvatarImage
									src="https://github.com/shadcn.png"
									alt="@shadcn"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<DialogFooter className="justify-end">
							<DialogClose asChild>
								<Button type="button" variant="secondary">
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};
export default UserCard;