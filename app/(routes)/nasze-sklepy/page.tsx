import Image from "next/image"

const page = () => {
  return (
    <div>
      nasze sklepy
      <Image
        src="https://dl.dropboxusercontent.com/scl/fi/7cee1f3lrf32h54vuv8mf/lampiony-plywajace-kwiaty-29-cm-6-szt.jpg?rlkey=2w99p83hp2eptdor9dq7beolt&dl=0"
        width={500}
        height={500}
        alt="test"
      />
    </div>
  )
}

export default page