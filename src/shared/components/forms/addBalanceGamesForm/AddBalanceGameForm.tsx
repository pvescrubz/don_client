// components/AddBalanceGameForm/AddBalanceGameForm.tsx
import { FormInput } from "@/shared/components/forms/formInput/FormInput";
import { AVAILABLE_FIELDS } from "@/shared/components/forms/input.info";
import { Button } from "@/shared/components/ui/Button/Button";
import { TFormProps } from "@/shared/typing/forms.type"; // Убедитесь, что TFormProps определяет 'config'
import Image from "next/image";
import { FC } from "react";
import { useForm } from "react-hook-form";
import styles from "./AddBalanceGameForm.module.css";

export const AddBalanceGameForm: FC<TFormProps> = ({ config }) => {
  // 1. Перемещаем вызов useForm сюда, ДО условного return
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    mode: "onChange", 
  });

 
  if (!config) {
    return <p>Данные формы не загружены</p>;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
    
  };

  
  const { title, description, image1, image2 } = config;

  return (
  <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.left}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>

        <div className={styles.images}>
          <Image src={image1} alt="Image 1" width={200} height={150} />
          <Image src={image2} alt="Image 2" width={200} height={150} />
        </div>
      
        
        <FormInput
          fieldName={AVAILABLE_FIELDS.LINK}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.LINK]}
          
        />
        <FormInput
          fieldName={AVAILABLE_FIELDS.EMAIL}
          register={register}
          error={!!errors[AVAILABLE_FIELDS.EMAIL]}
          
        />
        <Button type="submit" size="small" variant="primary" className={styles.button}> 
          Получить
        </Button>
     
    </div>
     </form>
  );
};