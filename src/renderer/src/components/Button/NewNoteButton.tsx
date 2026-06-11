import { ActionButton, ActionButtonProps } from '@/components'
import { createEmptyNoteAtom } from '@/store';
import { useSetAtom } from 'jotai';
import { PiNotePencilLight } from "react-icons/pi";

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {

  const createEmptyNote = useSetAtom(createEmptyNoteAtom)
  
  const handleCreation = () => {
    createEmptyNote()
  }

  return (
    <ActionButton onClick={handleCreation} {...props}>
      <PiNotePencilLight  className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}