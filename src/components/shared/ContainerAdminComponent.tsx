interface ContainerAdminProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerAdminComponent = ({
  children,
  className = "",
}: ContainerAdminProps) => {
  return (
    <div
      className={`mx-auto w-full max-w-[98%] lg:max-w-[95%] mt-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerAdminComponent;
