import { TextInput, Pressable } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import client from '../sanity';

export default function SendComment({ id }) {
  const { control, handleSubmit, reset } = useForm();

  const { user } = useSelector((state) => state.persistedReducer.user);

  const onSubmit = async (data) => {
    const post = {
      ...data,
      _id: id,
      userImage: user?.userImage,
      username: user?.name,
    };
    try {
      await client.create({
        _type: 'comment',
        post: {
          _type: 'reference',
          _ref: post._id,
        },
        name: post.username,
        image: post.userImage,
        content: post.coment,
      });
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Controller
        control={control}
        name={'coment'}
        render={({ field: { value, onChange } }) => {
          return (
            <TextInput
              value={value}
              placeholder="Escreva seu comentario"
              onChangeText={onChange}
              style={{ padding: 9 }}
            />
          );
        }}
        rules={{
          required: 'Para comentar voce precisa digatar algo',
        }}
      />
      <Pressable className="mx-3" onPress={handleSubmit(onSubmit)}>
        <Feather name="send" size={24} />
      </Pressable>
    </>
  );
}
