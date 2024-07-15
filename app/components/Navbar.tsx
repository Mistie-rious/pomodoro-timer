import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Modal, Button, Input } from "@mantine/core";

function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const [customTime, setCustomTime] = useState<number | null>(25);
  const [shortBreak, setShortBreak] = useState<number | null>(5);
  const [longBreak, setLongBreak] = useState<number | null>(10);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted time:", customTime, longBreak, shortBreak
    );
    close();
  };

  return (
    <>
      <div className="flex px-20 text-white w-screen justify-between items-center">
        <div>Mistie's Pomo</div>
        <Modal
          opened={opened}
          onClose={close}
          centered
          title="Customize Timers"
        >
          <div className="flex flex-col space-y-3">
           <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
  <div className="flex flex-col space-y-2">
    <Input.Wrapper label="Pomodoro Time" size="xs">
      <Input
        value={customTime !== null ? customTime : ""}
        onChange={(event) => setCustomTime(event.currentTarget.value ? Number(event.currentTarget.value) : null)}
        placeholder="Enter time in minutes"
        type="number"
      />
    </Input.Wrapper>

    <Input.Wrapper label="Short Break" size="xs">
      <Input
        value={shortBreak !== null ? shortBreak : ""}
        onChange={(event) => setShortBreak(event.currentTarget.value ? Number(event.currentTarget.value) : null)}
        placeholder="Enter short break in minutes"
        type="number"
      />
    </Input.Wrapper>

    <Input.Wrapper label="Long Break" size="xs">
      <Input
        value={longBreak !== null ? longBreak : ""}
        onChange={(event) => setLongBreak(event.currentTarget.value ? Number(event.currentTarget.value) : null)}
        placeholder="Enter long break in minutes"
        type="number"
      />
    </Input.Wrapper>
  </div>

  <Button
    type="submit"
    variant="filled"
    color="rgba(105, 116, 152, 1)"
    radius="lg"
  >
    Proceed
  </Button>
</form>
          </div>
        </Modal>

        <Button
          onClick={open}
          variant="outline"
          color="rgba(255, 255, 255, 1)"
          size="xs"
          radius="lg"
        >
          Settings
        </Button>
      </div>
    </>
  );
}

export default Navbar;
