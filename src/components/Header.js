// import { Box } from "@chakra-ui/react";
// import { GoQuestion } from "react-icons/go";
// import { For, HStack } from "@chakra-ui/react";
// import { Button } from "@/components/ui/button";
// import {
//   DialogActionTrigger,
//   DialogBody,
//   DialogCloseTrigger,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogRoot,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// export const Header = () => {
//   return (
//     <HStack wrap="wrap" gap="4">
//       <For each={"center"}>
//         {(placement) => (
//           <DialogRoot
//             key={placement}
//             placement={placement}
//             motionPreset="slide-in-bottom"
//           >
//             <DialogTrigger asChild>
//               <Button variant="outline">
//                 <GoQuestion /> ({placement}){" "}
//               </Button>
//             </DialogTrigger>
//             <DialogContent>
//               <DialogHeader>
//                 <DialogTitle>Dialog Title</DialogTitle>
//               </DialogHeader>
//               <DialogBody>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </DialogBody>
//               <DialogFooter>
//                 <DialogActionTrigger asChild>
//                   <Button variant="outline">Cancel</Button>
//                 </DialogActionTrigger>
//                 <Button>Save</Button>
//               </DialogFooter>
//               <DialogCloseTrigger />
//             </DialogContent>
//           </DialogRoot>
//         )}
//       </For>
//     </HStack>
//   );
// };
