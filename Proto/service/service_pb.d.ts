// package: service
// file: service/service.proto

import * as jspb from "google-protobuf";

export class AudioConfig extends jspb.Message {
  getSampleRateHertz(): number;
  setSampleRateHertz(value: number): void;

  getDisableAudio(): boolean;
  setDisableAudio(value: boolean): void;

  getEnableFacialData(): boolean;
  setEnableFacialData(value: boolean): void;

  getFaceModel(): FaceModelMap[keyof FaceModelMap];
  setFaceModel(value: FaceModelMap[keyof FaceModelMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AudioConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AudioConfig): AudioConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AudioConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AudioConfig;
  static deserializeBinaryFromReader(message: AudioConfig, reader: jspb.BinaryReader): AudioConfig;
}

export namespace AudioConfig {
  export type AsObject = {
    sampleRateHertz: number,
    disableAudio: boolean,
    enableFacialData: boolean,
    faceModel: FaceModelMap[keyof FaceModelMap],
  }
}

export class TriggerConfig extends jspb.Message {
  getTriggerName(): string;
  setTriggerName(value: string): void;

  getTriggerMessage(): string;
  setTriggerMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerConfig.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerConfig): TriggerConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerConfig;
  static deserializeBinaryFromReader(message: TriggerConfig, reader: jspb.BinaryReader): TriggerConfig;
}

export namespace TriggerConfig {
  export type AsObject = {
    triggerName: string,
    triggerMessage: string,
  }
}

export class ActionConfig extends jspb.Message {
  clearActionsList(): void;
  getActionsList(): Array<string>;
  setActionsList(value: Array<string>): void;
  addActions(value: string, index?: number): string;

  clearCharactersList(): void;
  getCharactersList(): Array<ActionConfig.Character>;
  setCharactersList(value: Array<ActionConfig.Character>): void;
  addCharacters(value?: ActionConfig.Character, index?: number): ActionConfig.Character;

  clearObjectsList(): void;
  getObjectsList(): Array<ActionConfig.Object>;
  setObjectsList(value: Array<ActionConfig.Object>): void;
  addObjects(value?: ActionConfig.Object, index?: number): ActionConfig.Object;

  getClassification(): string;
  setClassification(value: string): void;

  getContextLevel(): number;
  setContextLevel(value: number): void;

  getCurrentAttentionObject(): string;
  setCurrentAttentionObject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConfig): ActionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConfig;
  static deserializeBinaryFromReader(message: ActionConfig, reader: jspb.BinaryReader): ActionConfig;
}

export namespace ActionConfig {
  export type AsObject = {
    actionsList: Array<string>,
    charactersList: Array<ActionConfig.Character.AsObject>,
    objectsList: Array<ActionConfig.Object.AsObject>,
    classification: string,
    contextLevel: number,
    currentAttentionObject: string,
  }

  export class Character extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getBio(): string;
    setBio(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Character.AsObject;
    static toObject(includeInstance: boolean, msg: Character): Character.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Character, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Character;
    static deserializeBinaryFromReader(message: Character, reader: jspb.BinaryReader): Character;
  }

  export namespace Character {
    export type AsObject = {
      name: string,
      bio: string,
    }
  }

  export class Object extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Object.AsObject;
    static toObject(includeInstance: boolean, msg: Object): Object.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Object, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Object;
    static deserializeBinaryFromReader(message: Object, reader: jspb.BinaryReader): Object;
  }

  export namespace Object {
    export type AsObject = {
      name: string,
      description: string,
    }
  }
}

export class STTRequest extends jspb.Message {
  hasAudioConfig(): boolean;
  clearAudioConfig(): void;
  getAudioConfig(): AudioConfig | undefined;
  setAudioConfig(value?: AudioConfig): void;

  hasAudioChunk(): boolean;
  clearAudioChunk(): void;
  getAudioChunk(): Uint8Array | string;
  getAudioChunk_asU8(): Uint8Array;
  getAudioChunk_asB64(): string;
  setAudioChunk(value: Uint8Array | string): void;

  getRequestTypeCase(): STTRequest.RequestTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STTRequest.AsObject;
  static toObject(includeInstance: boolean, msg: STTRequest): STTRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STTRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STTRequest;
  static deserializeBinaryFromReader(message: STTRequest, reader: jspb.BinaryReader): STTRequest;
}

export namespace STTRequest {
  export type AsObject = {
    audioConfig?: AudioConfig.AsObject,
    audioChunk: Uint8Array | string,
  }

  export enum RequestTypeCase {
    REQUEST_TYPE_NOT_SET = 0,
    AUDIO_CONFIG = 1,
    AUDIO_CHUNK = 2,
  }
}

export class STTResponse extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): STTResponse.AsObject;
  static toObject(includeInstance: boolean, msg: STTResponse): STTResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: STTResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): STTResponse;
  static deserializeBinaryFromReader(message: STTResponse, reader: jspb.BinaryReader): STTResponse;
}

export namespace STTResponse {
  export type AsObject = {
    text: string,
  }
}

export class GetResponseRequest extends jspb.Message {
  hasGetResponseConfig(): boolean;
  clearGetResponseConfig(): void;
  getGetResponseConfig(): GetResponseRequest.GetResponseConfig | undefined;
  setGetResponseConfig(value?: GetResponseRequest.GetResponseConfig): void;

  hasGetResponseData(): boolean;
  clearGetResponseData(): void;
  getGetResponseData(): GetResponseRequest.GetResponseData | undefined;
  setGetResponseData(value?: GetResponseRequest.GetResponseData): void;

  getRequestTypeCase(): GetResponseRequest.RequestTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseRequest): GetResponseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseRequest;
  static deserializeBinaryFromReader(message: GetResponseRequest, reader: jspb.BinaryReader): GetResponseRequest;
}

export namespace GetResponseRequest {
  export type AsObject = {
    getResponseConfig?: GetResponseRequest.GetResponseConfig.AsObject,
    getResponseData?: GetResponseRequest.GetResponseData.AsObject,
  }

  export class GetResponseConfig extends jspb.Message {
    getCharacterId(): string;
    setCharacterId(value: string): void;

    getApiKey(): string;
    setApiKey(value: string): void;

    getSessionId(): string;
    setSessionId(value: string): void;

    hasAudioConfig(): boolean;
    clearAudioConfig(): void;
    getAudioConfig(): AudioConfig | undefined;
    setAudioConfig(value?: AudioConfig): void;

    hasActionConfig(): boolean;
    clearActionConfig(): void;
    getActionConfig(): ActionConfig | undefined;
    setActionConfig(value?: ActionConfig): void;

    getSpeaker(): string;
    setSpeaker(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponseConfig.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponseConfig): GetResponseConfig.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponseConfig, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponseConfig;
    static deserializeBinaryFromReader(message: GetResponseConfig, reader: jspb.BinaryReader): GetResponseConfig;
  }

  export namespace GetResponseConfig {
    export type AsObject = {
      characterId: string,
      apiKey: string,
      sessionId: string,
      audioConfig?: AudioConfig.AsObject,
      actionConfig?: ActionConfig.AsObject,
      speaker: string,
      languageCode: string,
    }
  }

  export class GetResponseData extends jspb.Message {
    hasAudioData(): boolean;
    clearAudioData(): void;
    getAudioData(): Uint8Array | string;
    getAudioData_asU8(): Uint8Array;
    getAudioData_asB64(): string;
    setAudioData(value: Uint8Array | string): void;

    hasTextData(): boolean;
    clearTextData(): void;
    getTextData(): string;
    setTextData(value: string): void;

    hasTriggerData(): boolean;
    clearTriggerData(): void;
    getTriggerData(): TriggerConfig | undefined;
    setTriggerData(value?: TriggerConfig): void;

    getInputTypeCase(): GetResponseData.InputTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponseData.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponseData): GetResponseData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponseData;
    static deserializeBinaryFromReader(message: GetResponseData, reader: jspb.BinaryReader): GetResponseData;
  }

  export namespace GetResponseData {
    export type AsObject = {
      audioData: Uint8Array | string,
      textData: string,
      triggerData?: TriggerConfig.AsObject,
    }

    export enum InputTypeCase {
      INPUT_TYPE_NOT_SET = 0,
      AUDIO_DATA = 1,
      TEXT_DATA = 2,
      TRIGGER_DATA = 3,
    }
  }

  export enum RequestTypeCase {
    REQUEST_TYPE_NOT_SET = 0,
    GET_RESPONSE_CONFIG = 1,
    GET_RESPONSE_DATA = 2,
  }
}

export class GetResponseRequestSingle extends jspb.Message {
  hasResponseConfig(): boolean;
  clearResponseConfig(): void;
  getResponseConfig(): GetResponseRequest | undefined;
  setResponseConfig(value?: GetResponseRequest): void;

  hasResponseData(): boolean;
  clearResponseData(): void;
  getResponseData(): GetResponseRequest | undefined;
  setResponseData(value?: GetResponseRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseRequestSingle.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseRequestSingle): GetResponseRequestSingle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseRequestSingle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseRequestSingle;
  static deserializeBinaryFromReader(message: GetResponseRequestSingle, reader: jspb.BinaryReader): GetResponseRequestSingle;
}

export namespace GetResponseRequestSingle {
  export type AsObject = {
    responseConfig?: GetResponseRequest.AsObject,
    responseData?: GetResponseRequest.AsObject,
  }
}

export class GetResponseResponse extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  hasActionResponse(): boolean;
  clearActionResponse(): void;
  getActionResponse(): GetResponseResponse.ActionResponse | undefined;
  setActionResponse(value?: GetResponseResponse.ActionResponse): void;

  hasAudioResponse(): boolean;
  clearAudioResponse(): void;
  getAudioResponse(): GetResponseResponse.AudioResponse | undefined;
  setAudioResponse(value?: GetResponseResponse.AudioResponse): void;

  hasDebugLog(): boolean;
  clearDebugLog(): void;
  getDebugLog(): string;
  setDebugLog(value: string): void;

  hasUserQuery(): boolean;
  clearUserQuery(): void;
  getUserQuery(): GetResponseResponse.UserTranscript | undefined;
  setUserQuery(value?: GetResponseResponse.UserTranscript): void;

  hasBtResponse(): boolean;
  clearBtResponse(): void;
  getBtResponse(): GetResponseResponse.BehaviorTreeResponse | undefined;
  setBtResponse(value?: GetResponseResponse.BehaviorTreeResponse): void;

  hasEmotionResponse(): boolean;
  clearEmotionResponse(): void;
  getEmotionResponse(): string;
  setEmotionResponse(value: string): void;

  hasInteractionId(): boolean;
  clearInteractionId(): void;
  getInteractionId(): string;
  setInteractionId(value: string): void;

  getResponseTypeCase(): GetResponseResponse.ResponseTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponseResponse): GetResponseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponseResponse;
  static deserializeBinaryFromReader(message: GetResponseResponse, reader: jspb.BinaryReader): GetResponseResponse;
}

export namespace GetResponseResponse {
  export type AsObject = {
    sessionId: string,
    actionResponse?: GetResponseResponse.ActionResponse.AsObject,
    audioResponse?: GetResponseResponse.AudioResponse.AsObject,
    debugLog: string,
    userQuery?: GetResponseResponse.UserTranscript.AsObject,
    btResponse?: GetResponseResponse.BehaviorTreeResponse.AsObject,
    emotionResponse: string,
    interactionId: string,
  }

  export class AudioResponse extends jspb.Message {
    getAudioData(): Uint8Array | string;
    getAudioData_asU8(): Uint8Array;
    getAudioData_asB64(): string;
    setAudioData(value: Uint8Array | string): void;

    hasAudioConfig(): boolean;
    clearAudioConfig(): void;
    getAudioConfig(): AudioConfig | undefined;
    setAudioConfig(value?: AudioConfig): void;

    getTextData(): string;
    setTextData(value: string): void;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): void;

    getFaceData(): string;
    setFaceData(value: string): void;

    hasVisemesData(): boolean;
    clearVisemesData(): void;
    getVisemesData(): VisemesData | undefined;
    setVisemesData(value?: VisemesData): void;

    hasBlendshapesData(): boolean;
    clearBlendshapesData(): void;
    getBlendshapesData(): BlendShapesData | undefined;
    setBlendshapesData(value?: BlendShapesData): void;

    hasEmotionResponse(): boolean;
    clearEmotionResponse(): void;
    getEmotionResponse(): GetResponseResponse.EmotionResponse | undefined;
    setEmotionResponse(value?: GetResponseResponse.EmotionResponse): void;

    getFaceDataTypeCase(): AudioResponse.FaceDataTypeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AudioResponse): AudioResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioResponse;
    static deserializeBinaryFromReader(message: AudioResponse, reader: jspb.BinaryReader): AudioResponse;
  }

  export namespace AudioResponse {
    export type AsObject = {
      audioData: Uint8Array | string,
      audioConfig?: AudioConfig.AsObject,
      textData: string,
      endOfResponse: boolean,
      faceData: string,
      visemesData?: VisemesData.AsObject,
      blendshapesData?: BlendShapesData.AsObject,
      emotionResponse?: GetResponseResponse.EmotionResponse.AsObject,
    }

    export enum FaceDataTypeCase {
      FACE_DATA_TYPE_NOT_SET = 0,
      VISEMES_DATA = 6,
      BLENDSHAPES_DATA = 7,
    }
  }

  export class ActionResponse extends jspb.Message {
    getAction(): string;
    setAction(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ActionResponse): ActionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionResponse;
    static deserializeBinaryFromReader(message: ActionResponse, reader: jspb.BinaryReader): ActionResponse;
  }

  export namespace ActionResponse {
    export type AsObject = {
      action: string,
    }
  }

  export class EmotionResponse extends jspb.Message {
    getEmotion(): string;
    setEmotion(value: string): void;

    getScale(): string;
    setScale(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmotionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: EmotionResponse): EmotionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmotionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmotionResponse;
    static deserializeBinaryFromReader(message: EmotionResponse, reader: jspb.BinaryReader): EmotionResponse;
  }

  export namespace EmotionResponse {
    export type AsObject = {
      emotion: string,
      scale: string,
    }
  }

  export class BehaviorTreeResponse extends jspb.Message {
    getBtCode(): string;
    setBtCode(value: string): void;

    getBtConstants(): string;
    setBtConstants(value: string): void;

    getNarrativeSectionId(): string;
    setNarrativeSectionId(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BehaviorTreeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: BehaviorTreeResponse): BehaviorTreeResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BehaviorTreeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BehaviorTreeResponse;
    static deserializeBinaryFromReader(message: BehaviorTreeResponse, reader: jspb.BinaryReader): BehaviorTreeResponse;
  }

  export namespace BehaviorTreeResponse {
    export type AsObject = {
      btCode: string,
      btConstants: string,
      narrativeSectionId: string,
    }
  }

  export class UserTranscript extends jspb.Message {
    getTextData(): string;
    setTextData(value: string): void;

    getIsFinal(): boolean;
    setIsFinal(value: boolean): void;

    getEndOfResponse(): boolean;
    setEndOfResponse(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTranscript.AsObject;
    static toObject(includeInstance: boolean, msg: UserTranscript): UserTranscript.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTranscript, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTranscript;
    static deserializeBinaryFromReader(message: UserTranscript, reader: jspb.BinaryReader): UserTranscript;
  }

  export namespace UserTranscript {
    export type AsObject = {
      textData: string,
      isFinal: boolean,
      endOfResponse: boolean,
    }
  }

  export enum ResponseTypeCase {
    RESPONSE_TYPE_NOT_SET = 0,
    ACTION_RESPONSE = 2,
    AUDIO_RESPONSE = 3,
    DEBUG_LOG = 4,
    USER_QUERY = 5,
    BT_RESPONSE = 6,
    EMOTION_RESPONSE = 7,
    INTERACTION_ID = 8,
  }
}

export class VisemesData extends jspb.Message {
  hasVisemes(): boolean;
  clearVisemes(): void;
  getVisemes(): Viseme | undefined;
  setVisemes(value?: Viseme): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisemesData.AsObject;
  static toObject(includeInstance: boolean, msg: VisemesData): VisemesData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisemesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisemesData;
  static deserializeBinaryFromReader(message: VisemesData, reader: jspb.BinaryReader): VisemesData;
}

export namespace VisemesData {
  export type AsObject = {
    visemes?: Viseme.AsObject,
  }
}

export class Viseme extends jspb.Message {
  getSil(): number;
  setSil(value: number): void;

  getPp(): number;
  setPp(value: number): void;

  getFf(): number;
  setFf(value: number): void;

  getTh(): number;
  setTh(value: number): void;

  getDd(): number;
  setDd(value: number): void;

  getKk(): number;
  setKk(value: number): void;

  getCh(): number;
  setCh(value: number): void;

  getSs(): number;
  setSs(value: number): void;

  getNn(): number;
  setNn(value: number): void;

  getRr(): number;
  setRr(value: number): void;

  getAa(): number;
  setAa(value: number): void;

  getE(): number;
  setE(value: number): void;

  getIh(): number;
  setIh(value: number): void;

  getOh(): number;
  setOh(value: number): void;

  getOu(): number;
  setOu(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Viseme.AsObject;
  static toObject(includeInstance: boolean, msg: Viseme): Viseme.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Viseme, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Viseme;
  static deserializeBinaryFromReader(message: Viseme, reader: jspb.BinaryReader): Viseme;
}

export namespace Viseme {
  export type AsObject = {
    sil: number,
    pp: number,
    ff: number,
    th: number,
    dd: number,
    kk: number,
    ch: number,
    ss: number,
    nn: number,
    rr: number,
    aa: number,
    e: number,
    ih: number,
    oh: number,
    ou: number,
  }
}

export class BlendShapesData extends jspb.Message {
  getBlendshapeData(): string;
  setBlendshapeData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlendShapesData.AsObject;
  static toObject(includeInstance: boolean, msg: BlendShapesData): BlendShapesData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlendShapesData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlendShapesData;
  static deserializeBinaryFromReader(message: BlendShapesData, reader: jspb.BinaryReader): BlendShapesData;
}

export namespace BlendShapesData {
  export type AsObject = {
    blendshapeData: string,
  }
}

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
  }
}

export class FeedbackRequest extends jspb.Message {
  getInteractionId(): string;
  setInteractionId(value: string): void;

  getCharacterId(): string;
  setCharacterId(value: string): void;

  getSessionId(): string;
  setSessionId(value: string): void;

  hasTextFeedback(): boolean;
  clearTextFeedback(): void;
  getTextFeedback(): FeedbackRequest.Feedback | undefined;
  setTextFeedback(value?: FeedbackRequest.Feedback): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FeedbackRequest): FeedbackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedbackRequest;
  static deserializeBinaryFromReader(message: FeedbackRequest, reader: jspb.BinaryReader): FeedbackRequest;
}

export namespace FeedbackRequest {
  export type AsObject = {
    interactionId: string,
    characterId: string,
    sessionId: string,
    textFeedback?: FeedbackRequest.Feedback.AsObject,
  }

  export class Feedback extends jspb.Message {
    getThumbsUp(): boolean;
    setThumbsUp(value: boolean): void;

    getFeedbackText(): string;
    setFeedbackText(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Feedback.AsObject;
    static toObject(includeInstance: boolean, msg: Feedback): Feedback.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Feedback, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Feedback;
    static deserializeBinaryFromReader(message: Feedback, reader: jspb.BinaryReader): Feedback;
  }

  export namespace Feedback {
    export type AsObject = {
      thumbsUp: boolean,
      feedbackText: string,
    }
  }
}

export class FeedbackResponse extends jspb.Message {
  getFeedbackResponse(): string;
  setFeedbackResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FeedbackResponse): FeedbackResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeedbackResponse;
  static deserializeBinaryFromReader(message: FeedbackResponse, reader: jspb.BinaryReader): FeedbackResponse;
}

export namespace FeedbackResponse {
  export type AsObject = {
    feedbackResponse: string,
  }
}

export interface FaceModelMap {
  FACE_MODEL_UNSPECIFIED: 0;
  FACE_MODEL_A_2F_MODEL_NAME: 1;
  FACE_MODEL_PHONEMES_MODEL_NAME: 2;
  FACE_MODEL_OVR_MODEL_NAME: 3;
}

export const FaceModel: FaceModelMap;

